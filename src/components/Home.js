import React from "react";
import { NavLink } from "react-router-dom";
import headProfile from "../images/headProfile.png";
import "./Home.css";
import "animate.css";

const Home = () => {
    return <>
        <div className="homebg">
            <div className="componentContainer">
                <div className="introContainer">
                    <div className="imgContainer">
                        <img src={headProfile} className="profilePic" alt="Kriselda's photo" />
                    </div>
                    <div className="textContainer">
                        <p className="header">Hi, I'm Kriselda.</p>
                        <p className="introText">I am a software engineer with a bachelors of science in Biochemistry. I love diving into the unknown and learning new skills that could one day help the people around me.  </p>
                        <p className="introText">Here you will find a record of my journey so far, my thought processes, ideas, and my aspirations.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Home;