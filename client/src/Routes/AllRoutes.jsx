import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Contact from '../Pages/Contact'



const AllRoute = () => {


return (
  <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute