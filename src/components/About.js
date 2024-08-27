import React from "react";
import { image } from "../data/data.js";

function About() {
 const image = "https://i.imgur.com/mV8PQxj.gif"; 

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a brief paragraph about me. I enjoy coding, learning new technologies, and creating web applications.</p>
      <img src= {image} alt="I made this" />
    </div>
  );
}


export default About;
