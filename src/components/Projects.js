import React from "react";
import "./Projects.css";
import P01 from "../images/Porto3000/P01.png";
import FT01 from "../images/FitnessTrackr/FT01.png";
import ST01 from "../images/StrangersThings/ST01.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
    return <>
        <div className="cardContainer">
            <div>
                <div className="cardTitle">Porto3000</div>
                <div>
                    <NavLink to="/projects/Porto3000"><img src={P01} alt="Porto3000 clickable card" className="card" /></NavLink>
                </div>
            </div>
            <div>
                <div className="cardTitle">StrangersThings</div>
                <div>
                    <NavLink to="/projects/StrangersThings"><img src={ST01} alt="StrangersThings clickable card" className="card" /></NavLink>
                </div>
            </div>
            <div>
                <div className="cardTitle">FitnessTracker</div>
                <div>
                    <NavLink to="/projects/FitnessTrackr"><img src={FT01} alt="FitnessTrackr clickable card" className="card" /></NavLink>
                </div>
            </div>
        </div>
    </>
}

export default Projects;