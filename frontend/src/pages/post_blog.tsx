import { Dash_bar } from "../component/Dash_bar";
import { PostComp } from "../component/post_com";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export function PostBlog()
{
    const [title , setTitle] = useState("");
    const [content , setContent] = useState("");
    const navigate = useNavigate()

    async function clickHandler()
    {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog/post`,{
                title,
                content
            },{
                headers:{
                  "Authorization" : localStorage.getItem("token")  
                }
            })
            console.log("Response:",response)
            navigate("/blogs")  
            console.log("after")
        }catch(err){
            console.log(err)
        }
    }
    return (<div>
        <Dash_bar/>
        <PostComp forTitle={(e)=>{setTitle(e.target.value)}} forContent={(e)=>{setContent(e.target.value)}} forButton={clickHandler}/>
    </div>)
}