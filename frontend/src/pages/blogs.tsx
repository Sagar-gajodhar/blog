import { Blogs_card } from "../component/blogs_card";
import { Dash_bar } from "../component/Dash_bar";
import { DashBarSkeleton } from "../component/DashBarSkaleten";
import { Skeleton } from "../component/skaleten";
import { useBlogs } from "../hooks/useBlog";

interface BlogInfo{
    title : string,
    content : string,
    date : string
    author : { name : string },
    id : string
}
export function Blogs()
{
    const {loading , blogs } = useBlogs();

    if(loading)
    {
        return <div>
            <DashBarSkeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    }
    return <div className="">
        <Dash_bar/>
        {blogs.map((info : BlogInfo) =>{
            return  <Blogs_card id={info.id} title={info.title} content={info.content} authName={info.author.name || "Anonymouss"} date={info.date} delButton={false} fullBlog={false} />
        })}
    </div>
}