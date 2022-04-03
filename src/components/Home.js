import React from "react";
import headProfile from "../images/headProfile.png";
import "./Home.css";

const Home = () => {
    return <>
        
        <div className="homebg">
            <div className="componentContainer">
                <div className="introContainer">
                    <div className="imgContainer">
                        <img src={headProfile} className="profilePic" alt="Kriselda's photo" />
                    </div>
                    <div className="textContainer">
                        <p className="header">Hi there friend.</p>
                        <p className="introText">My name is Kriselda Bonifacio. I am a junior software engineer with a bachelors of science in Biochemistry. I love diving into the unknown and learning new skills that could one day help the people around me.  </p>
                        <p className="introText">Here you will find a record of my journey so far, my thought processes, ideas, and my aspirations.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Home;