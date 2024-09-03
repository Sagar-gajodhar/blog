import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

interface BlogsInput {
    authName: string;
    title: string;
    content: string;
    date: string;
    delButton : boolean,
    fullBlog : boolean,
    id : string
}

export function Blogs_card({id, authName, title, content, date ,delButton ,fullBlog=false}: BlogsInput) {

    const navigate = useNavigate()

    async function fun_del()
    {
        await axios.put(`${BACKEND_URL}/api/v1/blog/delete`)
        navigate('/myPost');
    }

    return (
        <div  className="flex justify-center">
            <div className="w-4/5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <div className="flex space-between items-center px-6 py-4">
                    <div className="flex items-center">
                        <div className="bg-black text-white rounded-full h-10 w-10 flex items-center justify-center">
                            {authName[0].toUpperCase()}
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-semibold text-gray-800">{authName}</p>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm text-gray-600">{date}</p>
                        </div>
                    </div>
                    <div>
                    {delButton==true? <div onClick={fun_del}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                         </div>: <div></div>}
                    </div>
                </div>
                <div className="px-6 py-4">
                    <Link to={`/blogs/${id}`}>
                        <h2 className="text-xl font-bold text-gray-800 mb-2 cursor-pointer">{title}</h2>
                    </Link>
                    <p className="text-gray-700 text-base">{fullBlog==true?content:content.slice(0,100)}</p>
                </div>
            </div>
        </div>
    );
}
