import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


interface blogType{
    title : string,
    content : string,
    author : { name : string },
    id : string
}
export function useMypost()
{
    const [loading , setLoading] = useState(true)
    const [blogs , setBlogs] = useState<blogType[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/myPost`,{
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