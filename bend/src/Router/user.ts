import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode , sign , verify } from "hono/jwt";
import { signup } from "@sagarrathore2004/mediam-common";

interface Evn{
    DATABASE_URL : string,
    JWT_S : string
}

export const userRouter = new Hono<{ Bindings : Evn }>()

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signup.safeParse(body)
    if(!success)
    {
        c.status(411)
        return c.json({ message : "Please Provide valid input"})
    }
    try
    {
      const user = await prisma.user.create({
        data:{
          email : body.username,
          password : body.password,
          name : body.name  
        }
      })
    
      const token = await sign({ id : user.id,
                                authName : user.name
       },c.env.JWT_S)
    
      return c.json({
        jwt : token,
        name : user.name
      })
    }catch(err)
    {
      c.status(411);
      return c.json({ message : "User Already Exists"})
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
  
    const user = await prisma.user.findUnique({
      where : {
        email : body.username,
        password : body.password  }
    })
  
    if(!user)
    {
      c.status(403);
      return c.json({ message : "NO already exists"})
    }
  
    const token = await sign({id : user.id},c.env.JWT_S);
    return c.json({ jwt : token , name : user.name })
  
  })

  userRouter.get('/my_info', async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const header = c.req.header("authorization") || ""
    const dec = await verify(c.req.header("authorization") || "",c.env.JWT_S)
    const id = dec.id as string
    if(!id)
    {
      c.status(411)
      return c.json({message : "Please Login"})
    }

    try{
      const user = await prisma.user.findUnique({
        where : {id : Number(id)}
      })
      c.status(200)
      return c.json({user})
    }catch(err)
    {
      console.log(err)
      return c.json({error : err})
    }
  })