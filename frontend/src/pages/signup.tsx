import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../component/heading";
import { Input } from "../component/input";
import { SubHeading } from "../component/subHeading";
import  axios  from "axios";
import { BACKEND_URL } from "../config";
export function Signup() {

  const [name,setName] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate()

  async function ClickHandler()
  {
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
        username : email,
        password : password,
        name : name
      })
      const token = response.data.token;
      const nm = response.data.name;

      localStorage.setItem("token",token)
      localStorage.setItem("name",nm);
      
      navigate("/blogs")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="p-8">
          <Heading title="Create Your Account" />
          <SubHeading title="Already Have An Account?" button_text="Login" lk="/signin"/>
          <div className="mt-6 space-y-4">
            <Input title="Full Name" placeholder="Enter Your Full Name" tp="text" onchange={(e) => setName(e.target.value)} />
            <Input title="Email" placeholder="Enter Your Email" tp="text" onchange={function (e) {setemail(e.target.value)} } />
            <Input title="Password" placeholder="Enter Your Password" tp="password" onchange={(e)=>setpassword(e.target.value)} />
          </div>
          <button className="mt-6 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out" onClick={ClickHandler}>
            Sign Up
          </button>
        </div>

        <div className="p-8 bg-gray-200 flex flex-col justify-center items-center">
          <div className="text-center text-lg italic text-gray-600">
            "The journey of a thousand miles begins with a single step."
          </div>
          <div className="text-center mt-4 text-sm text-gray-500">
            - Lao Tzu
          </div>
        </div>
        
      </div>
    </div>
  );
}
