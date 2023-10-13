import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Projects'
import Awards from '../Pages/Awards'
import Builder from '../Pages/Builder'



const AllRoute = () => {


return (
  <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/awards" element={<Awards/>}></Route>
        <Route path="/builder" element={<Builder/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute