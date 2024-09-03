import { useState } from "react";
import { Heading } from "../component/heading";
import { Input } from "../component/input";
import { SubHeading } from "../component/subHeading";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function Signin() {

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const navigate = useNavigate()

  async function clickHandler()
  {
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
      username : email,
      password : password
    })

    const token = await response.data.jwt;
    const nm = await response.data.name;

    localStorage.setItem("token",token);
    localStorage.setItem("name",nm)
    navigate("/blogs")
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="p-8">
          <Heading title="Login Into Your Account" />
          <SubHeading title="Don't Have An Account?" button_text="SignUp" lk="/signup"/>
          <div className="mt-6 space-y-4">
            <Input title="Email" placeholder="Enter Your Email" tp="text" onchange={(e) => setemail(e.target.value)}/>
            <Input title="Password" placeholder="Enter Your Password" tp="password" onchange={(e) => setpassword(e.target.value)}/>
          </div>
          <button className="mt-6 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out" onClick={clickHandler}>
            Sign In
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
