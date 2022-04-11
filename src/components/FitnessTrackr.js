import React from "react";
import { NavLink } from "react-router-dom"
import "./Projects.css";
import FT01 from "../images/FitnessTrackr/FT01.png";
import FT02 from "../images/FitnessTrackr/FT02.png";
import FT03 from "../images/FitnessTrackr/FT03.png";
import FT04 from "../images/FitnessTrackr/FT04.png";
import FT05 from "../images/FitnessTrackr/FT05.png";

const FitnessTrackr = () => {
    return <>
        <div className="projectsContainer">
            <div className="projectCard">
                <NavLink to="/projects" className="backButton">Return to All Projects</NavLink>
                <p className="title"><b>Fitness Trackr</b></p>
                <div className="subheader"><i>A health application used to guide and create workout exercises</i></div>
                <div className="innerProjectCard">
                    <div className="thumbnailContainer">
                    <img src={FT01} width="500" height="315" alt="FitnessTracker home page" />
                    </div>
                    <div className="textContainer">
                        <p className="projectText"><b>Role:</b> Front-end developer</p>
                        <p className="projectText"><b>Team Size:</b> Individual project</p>
                        <p className="projectText"><b>Responsibility:</b> Overall development of the client side. Integrated the Fitness Trackr API and utilized REST API methodology to complete API calls.  </p>
                        <p className="projectText"><b>Stack: </b> Javasript, HTML5, CSS3, React, REST API methodology </p>
                        <p className="projectText"><b>GitHub:</b> <a href="https://github.com/kbonifacio/FitnessTrackr_FrontEnd.git" className="cardLink" target="_blank">FitnessTrackr</a> </p>
                        <p className="projectText"><b>Deployment:</b> <a href="https://fitnesstrackr-client.herokuapp.com/" className="cardLink" target="_blank">Heroku</a></p>
                    </div>
                </div>
                <div className="images"> 
                    <img src={FT02} className="projectImages" alt="FitnessTrackr register page" />
                    <img src={FT03} className="projectImages" alt="FitnessTrackr user dashboard page" />
                    <img src={FT04} className="projectImages" alt="FitnessTrackr activities page" />
                    <img src={FT05} className="projectImages" alt="FitnessTrackr account page" />
                </div>
            </div>
        </div>
    </>
}

export default FitnessTrackr;



