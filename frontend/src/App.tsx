import { BrowserRouter , Route , Routes } from "react-router-dom"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { Blogs } from "./pages/blogs"
import { PostBlog } from "./pages/post_blog"
import { Me } from "./pages/me"
import { Full_Blog } from "./pages/full_blog"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element = { <Signup/> }/> 
          <Route path="/signin" element = { <Signin/> }/> 
          <Route path="/blogs" element = { <Blogs/> }/> 
          <Route path="/post" element = { <PostBlog/>}/>
          <Route path="/myPost" element = {<Me/>}/>
          <Route path="/blogs/:id" element = {<Full_Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
