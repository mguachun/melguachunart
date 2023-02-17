import React from "react";
import "./About.css"
// import { Col, Row } from "react-bootstrap";
import Melissa from '../images/melissa.png';

function About() {
    return(
    <div id="about-container">
          <img src={Melissa} id='Melissa'/>
          <br></br>
          <p id='about'>
          Melissa Guachun is a New York City based illustrator and software engineer. 
            After graduating with a BA in English from Hunter College, she completed 
            a Full Stack Software Engineering Bootcamp at the Flatiron School. In her free 
            time, she focuses on her original passion, illustration. Her 
            mediums include digital, ink, and graphite. 
          </p>
  </div>
        
    )
}
export default About;