import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import "./WorkCardData.js"

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
                  {/* <div className="video">
                  <video autoPlay loop muted>
                <video src={this.props.vidsrc} alt="video/mp4" />
            </video> 
        </div> */}
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        {/* <div className="video">
            <video autoPlay loop muted>
                <source src={props.vidsrc} alt="video/mp4" />
            </video> 
        </div> */}
        {/* <div className="pro-btns">
            <NavLink to={props.view} className="btn">
                Link to Game
            </NavLink> */}
            {/* <NavLink to="puturlhere.com" className="btn">
                Link to GITHUB
            </NavLink> */}
        {/* </div> */}
    </div>
</div>
  )
}

export default WorkCard