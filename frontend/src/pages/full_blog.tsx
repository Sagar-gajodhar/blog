import { useParams } from "react-router-dom";
import { Dash_bar } from "../component/Dash_bar";
import { FullBlogCom } from "../component/full_blog_com";
import { useFullBlog } from "../hooks/useFullBlog";
import { DashBarSkeleton } from "../component/DashBarSkaleten";
import { Skeleton } from "../component/skaleten";

export function Full_Blog()
{
    const { id } = useParams()
    const {loading , blog} = useFullBlog({
            id : id || ""
    })
    if(loading)
    {
        return <div>
            <DashBarSkeleton/>
            <Skeleton/>
        </div>
    }
    return <div>
        <Dash_bar />
        <FullBlogCom title={blog?.title || ""} content={blog?.content || ""} authName={blog?.author.name || ""} date="26th Oct 2004"/>
    </div>
}