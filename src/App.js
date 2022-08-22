import React from 'react'
import AddBlog from './Components/AddBlog'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Alert from './Components/Alert';
import BlogPage from './Components/BlogPage';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/AddBlog" element={<AddBlog />} />
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<BlogPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App