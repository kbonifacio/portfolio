import React from "react";
import { NavLink } from "react-router-dom"
import "./Projects.css";
import ST01 from "../images/StrangersThings/ST01.png";
import ST02 from "../images/StrangersThings/ST02.png";
import ST03 from "../images/StrangersThings/ST03.png";
import ST04 from "../images/StrangersThings/ST04.png"

const StrangersThings = () => {
    return <>      
            <div className="projectsContainer">
                <div className="projectCard">
                    <NavLink to="/projects" className="backButton">Return to All Projects</NavLink>
                    <p className="title"><b>Stranger's Things</b></p>
                    <div className="subheader"><i>A website for the sale of personal goods.</i></div>
                    <div className="innerProjectCard">
                        <div className="thumbnailContainer">
                        <iframe width="500" height="315" src="https://www.youtube.com/embed/wGtyDJiNSmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="textContainer">
                            <p className="projectText"><b>Role:</b> Front-end developer</p>
                            <p className="projectText"><b>Team Size:</b> Individual project</p>
                            <p className="projectText"><b>Responsibility:</b> Overall development of the client side. Integrated the Stranger's Things API created by Full Stack Academy and utilized REST API methodology to complete API calls.  </p>
                            <p className="projectText"><b>Stack: </b> Javasript, HTML5, CSS3, React, REST API methodology </p>
                            <p className="projectText"><b>GitHub:</b> <a href="https://github.com/kbonifacio/Strangers_things_1" className="cardLink" target="_blank">StrangersThings</a> </p>
                            <p className="projectText"><b>Deployment:</b> <a href="https://strangersthings.herokuapp.com/" className="cardLink" target="_blank">Heroku</a></p>
                        </div>
                    </div>
                    <div className="images"> 
                        <img src={ST01} className="projectImages" alt="StrangersThings home page" />
                        <img src={ST02} className="projectImages" alt="StrangersThings listings page" />
                        <img src={ST03} className="projectImages" alt="StrangersThings login page" />
                        <img src={ST04} className="projectImages" alt="StrangersThings user dashboard page" />
                    </div>
                </div>
            </div>
        </>
    }

export default StrangersThings;