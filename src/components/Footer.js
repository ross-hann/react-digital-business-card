import React from "react"
import twitter from "../images/twitter-square-brands.svg"
import facebook from "../images/facebook-square-brands.svg"
import instagram from "../images/instagram-square-brands.svg"
import linkedin from "../images/linkedin-square-brands.svg"
import github from "../images/github-square-brands.svg"


export default function Footer() {
    return (
        <div className="Footer">
            <img src = {twitter} alt = "twitter"  className="icons" />
            <img src = {facebook} alt = "facebook"  className="icons" />
            <img src = {instagram} alt = "instagram" className="icons" />
            <img src = {linkedin} alt = "linkedin" className="icons" />
            <img src = {github} alt = "github" className="icons" />
        </div>
    )
}