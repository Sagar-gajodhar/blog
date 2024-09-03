import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface blog{
    title : string,
    content : string,
    authorId : string,
    author : {name : string}
}
export function useFullBlog({id} : {id : string})
{
    const [loading , setLoading] = useState(true);
    const [blog,setBlog] = useState<blog>();
    
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers : {
                Authorization : localStorage.getItem("token")
            }
        }).then((response) =>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])

    return {
        loading,
        blog
    }
}