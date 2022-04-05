import React from "react";
import "./Projects.css";
import P01 from "../images/Porto3000/P01.png";
import P02 from "../images/Porto3000/P02.png";
import P03 from "../images/Porto3000/P03.png";
import P04 from "../images/Porto3000/P04.png";
import P05 from "../images/Porto3000/P05.png";
import P06 from "../images/Porto3000/P06.png";
import FT01 from "../images/FitnessTrackr/FT01.png";
import FT02 from "../images/FitnessTrackr/FT02.png";
import FT03 from "../images/FitnessTrackr/FT03.png";
import FT04 from "../images/FitnessTrackr/FT04.png";
import FT05 from "../images/FitnessTrackr/FT05.png";
import ST01 from "../images/StrangersThings/ST01.png";
import ST02 from "../images/StrangersThings/ST02.png";
import ST03 from "../images/StrangersThings/ST03.png";
import ST04 from "../images/StrangersThings/ST04.png"

const Projects = () => {
    return <>
        <div className="projectsbg">
            <div className="projectsContainer">
                <div className="projectCard">
                    <p className="title"><b>Grace Hopper: Porto3000</b></p>
                    <div className="subheader"><i>A wine and cheese e-commerce website</i></div>
                    <div className="innerProjectCard">
                        <div className="thumbnailContainer">
                            <iframe width="500" height="315" src="https://www.youtube.com/embed/KMA3AOkHswI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="textContainer">
                            <p><b>Role:</b> Full stack developer</p>
                            <p><b>Team Size:</b> 4 developers</p>
                            <p><b>Responsibility:</b> Overall UX/UI of website</p>
                            <p><b>Additional Tasks:</b> Integration of Stripe API, creation of server routes and initial seed data. Completed duties as rotational stand up leader, task manager, and maintained project documentations. </p>
                            <p className="projectStack"><b>Stack: </b> Javascript, HTML5, CSS3, React, Node.JS, Express, PostgreSQL </p>
                            <p><b>GitHub:</b> <a href="https://github.com/hoguer/porto3000" className="cardLink" target="_blank">Porto3000</a> </p>
                            <p><b>Deployment:</b> <a href="http://porto3000.herokuapp.com" className="cardLink" target="_blank">Heroku</a></p>
                        </div>
                    </div>
                    <div className="images"> 
                        <img src={P01} className="projectImages" alt="Porto3000 home page"/>
                        <img src={P02} className="projectImages" alt="Porto3000 founders page" />
                        <img src={P03} className="projectImages" alt="Porto3000 product page" />
                        <img src={P04} className="projectImages" alt="Porto3000 login page" />
                        <img src={P05} className="projectImages" alt="Porto3000 registration page" />
                        <img src={P06} className="projectImages" alt="Porto3000 cart page" />
                    </div>
                </div>
            </div>
            <div className="projectsContainer">
                <div className="projectCard">
                    <p className="title"><b>Fitness Trackr</b></p>
                    <div className="subheader"><i>A health application used to guide and create workout exercises</i></div>
                    <div className="innerProjectCard">
                        <div className="thumbnailContainer">
                        <iframe width="500" height="315" src="https://www.youtube.com/embed/CuseI8nhMxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="textContainer">
                            <p><b>Role:</b> Front-end developer</p>
                            <p><b>Team Size:</b> Individual project</p>
                            <p><b>Responsibility:</b> Overall development of the client side. Integrated the Fitness Trackr API and utilized REST API methodology to complete API calls.  </p>
                            <p className="projectStack"><b>Stack: </b> Javasript, HTML5, CSS3, React, REST API methodology </p>
                            <p><b>GitHub:</b> <a href="https://github.com/kbonifacio/FitnessTrackr_FrontEnd.git" className="cardLink" target="_blank">FitnessTrackr</a> </p>
                            <p><b>Deployment:</b> <a href="https://fitnesstrackr-client.herokuapp.com/" className="cardLink" target="_blank">Heroku</a></p>
                        </div>
                    </div>
                    <div className="images"> 
                        <img src={FT01} className="projectImages" alt="FitnessTrackr home page"/>
                        <img src={FT02} className="projectImages" alt="FitnessTrackr register page" />
                        <img src={FT03} className="projectImages" alt="FitnessTrackr user dashboard page" />
                        <img src={FT04} className="projectImages" alt="FitnessTrackr activities page" />
                        <img src={FT05} className="projectImages" alt="FitnessTrackr account page" />
                    </div>
                </div>
            </div>
            <div className="projectsContainer">
                <div className="projectCard">
                    <p className="title"><b>Stranger's Things</b></p>
                    <div className="subheader"><i>A website for the sale of personal goods.</i></div>
                    <div className="innerProjectCard">
                        <div className="thumbnailContainer">
                        <iframe width="500" height="315" src="https://www.youtube.com/embed/CuseI8nhMxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="textContainer">
                            <p><b>Role:</b> Front-end developer</p>
                            <p><b>Team Size:</b> Individual project</p>
                            <p><b>Responsibility:</b> Overall development of the client side. Integrated the Stranger's Things API created by Full Stack Academy and utilized REST API methodology to complete API calls.  </p>
                            <p className="projectStack"><b>Stack: </b> Javasript, HTML5, CSS3, React, REST API methodology </p>
                            <p><b>GitHub:</b> <a href="https://github.com/kbonifacio/Strangers_things_1" className="cardLink" target="_blank">StrangersThings</a> </p>
                            <p><b>Deployment:</b> <a href="https://strangersthings.herokuapp.com/" className="cardLink" target="_blank">Heroku</a></p>
                        </div>
                    </div>
                    <div className="images"> 
                        <img src={ST01} className="projectImages" alt="StrangersThings home page"/>
                        <img src={ST02} className="projectImages" alt="StrangersThings listings page" />
                        <img src={ST03} className="projectImages" alt="StrangersThings login page" />
                        <img src={ST04} className="projectImages" alt="StrangersThings user dashboard page" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Projects;