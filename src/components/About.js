import React from "react";
import { image } from "../data/data";

function About() {
  return( <div id="about">
    <h2>About Me</h2>
    <img src={image} alt="I made this" />
    <p>
      I am a passionate web developer with a focus on creating dynamic and responsive web applications.
      My journey in web development has been fueled by a love for coding and a desire to build impactful digital experiences.
    </p>
  </div>
  );
}

export default About;
