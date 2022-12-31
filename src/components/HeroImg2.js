import "./HeroImg2Styles.css"
import IntroImg from "../assets/pfbkgrndimg.jpeg"
import React, { Component } from 'react'



class HeroImg2 extends Component {
    render(){
  return (
    <div className="hero-img">
      {/* <img className="intro-img" src={IntroImg} alt="IntroImg" /> */}
        <div className="heading">
          <h1>{this.props.heading}</h1>  
          <p>{this.props.text}</p>

        </div>
    </div>
  )
 }
}

export default HeroImg2