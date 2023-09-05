import React from "react";
import Home from "./cmp/Home";
import Aboutus from "./cmp/about-us";
import Blog from "./cmp/blog";
import Contactus from "./cmp/contact";

import {BrowserRouter,Routes,Route} from "react-router-dom";

const App =() =>{
   return (
      <>
      <BrowserRouter>
          <Routes>  
             <Route path="/" element={<Home />} />
             <Route path="/about-us" element={<Aboutus />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/contact" element={<Contactus />} />
             
          </Routes>
          </BrowserRouter>
     
      </>
   )
}
export default App;
