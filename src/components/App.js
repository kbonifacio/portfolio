import React from "react";
import { Routes, Route, NavLink } from "react-router-dom"

const App = () => {
    return (<>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </>)
}

export default App;