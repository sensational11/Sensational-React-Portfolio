import React from "react";
import staticshock from "../images/staticshock.jpg";
function About() {
  return (
    <section>
      <div className="avatar">
      <img src={staticshock} alt = "this is my about me avatar" />
      </div>
      <div className="about">
  <p>Hello everyone! My name is Mack Nelson and welcome to my react portfolio page. <br></br> I am inspiring developer who appreciates having an idea and then creating it. <br></br> I enjoy sneakers , anime, sports, and spending time with the people who mean the most to me. <br></br>Enough about me enjoy my page!</p>
  </div>
    </section>
  );
}

export default About;
