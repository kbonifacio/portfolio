import React from "react";
import { NavLink } from "react-router-dom";
import headProfile from "../images/headProfile.png";
import gitHub from "../images/gitHub_logo.png";
import linkedIn from "../images/linkedIn_logo.png";
import outlook from "../images/outlook_logo.png";
import "./Home.css";
import "animate.css";

const Home = () => {
    return <>
        <div className="homebg">
            <div className="componentContainer">
                <div className="introContainer">
                    <div className="contactContainer">
                        <a href="https://www.linkedin.com/in/kbonifacio/"><img src={linkedIn} alt="linkedIn logo" className="contactLinks" /></a>
                        <a href="https://github.com/kbonifacio"><img src={gitHub} alt="linkedIn logo" className="contactLinks" /></a>
                        <a href="mailto:ksda.bonifacio@gmail.com"><img src={outlook} alt="outlook logo" className="contactLinks"/></a>
                    </div>
                    <div className="imgContainer">
                        <img src={headProfile} className="profilePic" alt="Kriselda's photo" />
                    </div>
                    <div className="textContainer">
                        <p className="header">Hi, I'm <NavLink to="/aboutme" className="kriselda">Kriselda.</NavLink></p>
                        <p className="introText">I am a software engineer with a bachelors of science in Biochemistry. I love diving into the unknown and learning new skills that could one day help the people around me.  </p>
                        <p className="introText">Here you will find a record of my journey so far.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Home;