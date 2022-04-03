import React from "react";
import "./Projects.css";
import P01 from "../images/Porto3000/P01.png"
const Projects = () => {
    return <>
        <div className="projectsbg">
            <div className="projectsContainer">
                <div className="projectCard">
                    <h1 className="title">Grace Hopper: Porto3000 </h1>
                    <div className="innerProjectCard">
                        <div className="thumbnailContainer">
                            <img src={P01} className="thumbnail"/>
                        </div>
                        <div className="textContainer">
                            <p className="textDescription">A wine and cheese e-commerce website</p>
                            <p className="projectStack"><b>Stack: </b> Javasript, HTML5, CSS3, React, Node.JS, Express, PostgreSQL </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Projects;