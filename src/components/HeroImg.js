import "./HeroImgStyles.css";
import React from 'react'
import FullImg from "../assets/full.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="full-img" src={FullImg} alt="FullImg" />
        </div>
        <div className="content">
            <p>Mike Santacruz</p>
            <p>FULL STACK</p>
            <h1>React and Ruby on Rails Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg