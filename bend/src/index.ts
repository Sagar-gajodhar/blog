import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode , sign , verify } from "hono/jwt"
import { userRouter } from './Router/user'
import { blogRouter } from './Router/blog'
import { cors } from 'hono/cors'

interface Evn{
  DATABASE_URL : string;
  JWT_S : string;
}

const app = new Hono<{ Bindings : Evn}>()
app.use("/*",cors())

app.route("api/v1/user",userRouter)
app.route("api/v1/blog",blogRouter)

// Middlewares
app.use('api/v1/blog/*', async (c,next)=>{
  const header = c.req.header("authorization") || "";
  const response = await verify(header,c.env.JWT_S)
  if(response.id)
  {
    next()
  }
  else
  {
    return c.json({"message": "unauthorization"})
  }
})




app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('', (c) => {
  return c.text('Hello Hono!')
})

app.get('', (c) => {
  return c.text('Hello Hono!')
})



export default app
