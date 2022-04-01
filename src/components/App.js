import React from "react";
import { Routes, Route, NavLink } from "react-router-dom"
import {
    Home
} from "./index"

const App = () => {
    return (<>
        <NavLink to="/" className="headerLinks">Home</NavLink>
        <NavLink to="/projects" className="headerLinks">Projects</NavLink>
        <NavLink to="/aboutme" className="headerLinks">About Me</NavLink>
        <NavLink to="/contact" className="headerLinks">Contact</NavLink>

        <Routes>
            <Route path="/" exact element={ <Home/>}/>
        </Routes>
    </>)
}

export default App;