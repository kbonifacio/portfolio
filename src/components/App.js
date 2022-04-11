import React from "react";
import { Routes, Route, NavLink } from "react-router-dom"
import "../style.css"
import {
    Home,
    Projects,
    AboutMe,
    Porto3000,
    FitnessTrackr, 
    StrangersThings
} from "./index"

const App = () => {
    return (<>
        <div className="headerContainer">
            <NavLink to="/" className="headerLinks">Home</NavLink>
            <NavLink to="/aboutme" className="headerLinks">About Me</NavLink>
            <NavLink to="/projects" className="headerLinks">Projects</NavLink>
        </div>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/projects" exact element={<Projects/>} />
            <Route path="/aboutme" exact element={<AboutMe />} />
            <Route path="/projects/Porto3000" exact element={<Porto3000 />} />
            <Route path="/projects/StrangersThings" exact element={<StrangersThings />} />
            <Route path="/projects/FitnessTrackr" exact element={<FitnessTrackr />} />
        </Routes>
    </>)
}

export default App;