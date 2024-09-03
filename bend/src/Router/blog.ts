import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode , sign , verify } from "hono/jwt";


interface Evn{
    DATABASE_URL : string,
    JWT_S : string
}

export const blogRouter = new Hono<{ Bindings : Evn , Variables : { userId : string}}  >()


blogRouter.get('/bulk' , async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            title : true,
            content : true,
            id : true,
            author :{
                select :{
                    name : true
                }
            }
        }
    })

    return c.json({
        blogs
    })
})


blogRouter.use("/*", async (c,next) =>{
    const authHeader = c.req.header("authorization") || ""
    const curr_user = await verify(authHeader,c.env.JWT_S)
    const curr_user_id = curr_user.id as string;
    try
    {
        if(curr_user)
            {   
                c.set("userId" , curr_user_id )
                await next();
            }
            else
            {
                c.status(403)
                return c.json({ message : "you are not logged in"})
            }
    }catch(err)
    {
        c.status(403)
        return c.json({ message : "you are not logged in"})
    }
})

blogRouter.post("/post", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const authId = c.get("userId")

    try
    {
        const blog = await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : Number(authId)
            }
        })
        return c.json({
            id : blog.id
        })
    }catch(err){
        console.log(err)
        return c.json({err : err})
    }
})




blogRouter.put("/", async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()

    const blog = await prisma.post.update({
        where : {id : body.id},
        data: {
            title : body.title,
            content : body.content
        }
    })
})


blogRouter.get("/myPost", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const authId = Number(c.get("userId"));

    try {
        if (isNaN(authId)) {
            c.status(411)
            return c.json({ message: "Please LogIn" });
        }

        const blogs = await prisma.post.findMany({
            where: {
                authorId: authId,
            },select:{
                title : true,
                content :true,
                id : true,
                author : {
                    select : {
                        name:true
                    }
                }
            }
        });

        c.status(200)
        return c.json({ blogs });
    } catch (err) {
        console.error("Error fetching posts:", err);
        c.status(500)
        return c.json({ message: "Internal Server Error" });
    }
});

blogRouter.put("/delete", async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const del_id = body.id
    if(!del_id)
    {
        c.json({mess : "Please Pass Id of post which to be deleted"})
    }
    await prisma.post.delete({
        where : { id : del_id}
    })
    return c.json({
        message : "Delete Successfully"
    })
})



blogRouter.get("/:id" , async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = Number(c.req.param("id"))
    try{

        if(isNaN(id))
        {
            c.status(400)
            c.json({ message : "Invalid ID"   })
        }

        const blog = await prisma.post.findFirst({
            where : {id : Number(id)},
            select:{
                title : true,
                content: true,
                authorId : true,
                author : {
                    select:{
                        name : true
                    }
                }
            }
        })

        if(!blog)
        {
            c.status(404)
            c.json({message : "No Blog Found"})
        }
        return c.json({blog})
    }catch(err)
    {
        console.log(err);
        c.status(403);
        return c.json({error : err,
            id : id
    })
    }
})


