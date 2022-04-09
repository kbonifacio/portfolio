import React from "react";
import logo2 from "../images/linkedIn_logo.png"
import "./Contact.css"

const Contact = () => {
    return <>
        <div className="container">
            <div className="contactCard" >
                email
            </div>
            <div className="contactCard">
                <img src={logo2} className="logo2" />
            </div>

        </div>
    </>

}

export default Contact;