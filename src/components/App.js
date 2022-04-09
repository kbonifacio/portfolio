import React from "react";
import { Routes, Route, NavLink } from "react-router-dom"
import "../style.css"
import {
    Home,
    Projects,
    Contact
} from "./index"

const App = () => {
    return (<>
        <div className="headerContainer">
            <NavLink to="/" className="headerLinks">Home</NavLink>
            <NavLink to="/aboutme" className="headerLinks">About Me</NavLink>
            <NavLink to="/projects" className="headerLinks">Projects</NavLink>
            <NavLink to="/contact" className="headerLinks">Contact</NavLink>
        </div>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/projects" exact element={<Projects/>} />
            <Route path="/contact" exact element = {<Contact />} />
        </Routes>
    </>)
}

export default App;