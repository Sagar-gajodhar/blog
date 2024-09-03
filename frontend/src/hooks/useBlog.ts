import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface BlogType{
    title : string,
    content : string,
    date : string,
    author : { name : string },
    id : string
}
export function useBlogs()
{
    const [loading , setLoading] = useState(true)
    const [blogs , setBlogs] = useState<BlogType[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers :{
                Authorization : localStorage.getItem("token")
            }
        }).then(response =>{  setBlogs(response.data.blogs) ;
            setLoading(false)
        })
    } , [])

    return {
        loading,
        blogs
    }
}