import write from "./svgss/write.svg";
import bell from "./svgss/bell.svg";
import { useNavigate } from "react-router-dom";


const authName = localStorage.getItem("name") || "Anonomus"

export function Dash_bar() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center space-x-6">
                <div onClick={()=>{navigate('/blogs')}} className="text-2xl font-bold cursor-pointer">Logo</div>

                    <form>
                        <div className="relative">
                            
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/></svg>
                            </div>
                            
                            <input type="search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..."/>
                        </div>
                    </form>       
                <button type="submit" className="text-white  bg-blue-700 hover:bg-black  font-medium rounded-lg text-sm px-4 py-2">
                            Search
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-8 h-8">
                    <img src={write} alt="Write Icon" onClick={()=>{ navigate("/post")}} className="w-full h-full cursor-pointer" />
                </div>
                <div className="w-8 h-8">
                    <img src={bell} alt="Bell Icon" className="w-full h-full cursor-pointer" />
                </div>
                <div onClick={()=> {navigate("/myPost")}}  className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full cursor-pointer">
                    {authName[0].toUpperCase()}
                </div>
            </div>
        </div>
    );
}
