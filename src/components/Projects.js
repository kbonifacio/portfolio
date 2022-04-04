import React from "react";
import "./Projects.css";
import P01 from "../images/Porto3000/P01.png";
import P02 from "../images/Porto3000/P02.png";
import P03 from "../images/Porto3000/P03.png";
import P04 from "../images/Porto3000/P04.png";
import P05 from "../images/Porto3000/P05.png";
import P06 from "../images/Porto3000/P06.png";
const Projects = () => {
    return <>
        <div className="projectsbg">
            <div className="projectsContainer">
                <div className="projectCard">
                    <p className="title"><b>Grace Hopper: Porto3000</b></p>
                    <div className="innerProjectCard">
                        <div className="thumbnailContainer">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/KMA3AOkHswI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="textContainer">
                            <p className="textDescription">A wine and cheese e-commerce website</p>
                            <p><b>Role:</b> Full stack developer</p>
                            <p><b>Responsibility:</b> Overall UX/UI of website</p>
                            <p><b>Additional Tasks:</b> Integration of Stripe API, creation of server routes and initial seed data. Completed duties as rotational stand up leader, task manager, and maintained project documentations. </p>
                            <p className="projectStack"><b>Stack: </b> Javasript, HTML5, CSS3, React, Node.JS, Express, PostgreSQL </p>
                            <p><b>GitHub:</b> <a href="https://github.com/hoguer/porto3000" className="cardLink">Porto3000</a> </p>
                            <p><b>Deployment:</b> <a href="http://porto3000.herokuapp.com" className="cardLink">Heroku</a></p>
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
        </div>
    </>
}

export default Projects;