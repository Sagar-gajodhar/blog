import { Blogs_card } from "../component/blogs_card";
import { Dash_bar } from "../component/Dash_bar";
import { DashBarSkeleton } from "../component/DashBarSkaleten";
import { Skeleton } from "../component/skaleten";
import { useMypost } from "../hooks/useMypost";

interface blogInfo{
    title : string,
    content : string,
    author : { name : string},
    id : string
}
export function Me()
{
    const {loading , blogs } = useMypost();
    if(loading)
    {
        return <div>
            <DashBarSkeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    }
    return <div>
        <Dash_bar/>
        {blogs.map( (info : blogInfo) =>{
            return <Blogs_card id={info.id} title={info.title} content={info.content} authName={info.author.name} date="26th of October" delButton={true} fullBlog={false} />
        })}
    </div>
}