import z from "zod"

export const signup = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()  
})

export type signupInput = z.infer<typeof signup>

export const signin = z.object({
    username : z.string().email(),
    password : z.string().min(6), 
})

export type signinInput = z.infer<typeof signin>

export const contentType = z.object({
    title : z.string(),
    content : z.string(), 
})

export type contentType = z.infer<typeof contentType>

export const updateType = z.object({
    title : z.string(),
    content : z.string(), 
    id : z.number()
})

export type updateType = z.infer<typeof updateType>