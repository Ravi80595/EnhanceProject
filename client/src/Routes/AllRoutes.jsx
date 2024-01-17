import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Projects'
import Awards from '../Pages/Awards'
import Builder from '../Pages/Builder'
import Contractors from '../Pages/Contractors'
import Groups from '../Pages/Groups'
import ProjectDetails from '../Pages/ProjectDetails'
import Arovar from '../Pages/Arovar'
import Enhance from '../Pages/Enhance'



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
        <Route path="/contractors" element={<Contractors/>}></Route>
        <Route path="/groups" element={<Groups/>}></Route>
        <Route path="/urvarshi" element={<ProjectDetails/>}></Route>
        <Route path="/arovar" element={<Arovar/>}></Route>
        <Route path="/enhance" element={<Enhance/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute