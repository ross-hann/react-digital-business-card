import React from "react"
import profilepic from "../images/profile_pic.png"
import envelope from "../images/envelope-solid.svg"


export default function Info() {
    return (
        <div className="Info">
            <img src = {profilepic} alt = "profile-pic" className="profile-pic" />

            <p className="name">ross hann</p>
            <p className="position">Frontend Developer</p>
            <p className="web">ross-hann.website</p>

            <button type="button" className="button" onClick = {() => {window.location.href='https://www.gmail.com'}}>contact me</button>
        </div>
    )
}