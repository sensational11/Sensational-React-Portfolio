import React from "react";
import passwordgenerate from "../images/passwordgenerate.jpg";
function Projects() {
  return (
    <section>
        <div className="firstproject">
    <img src={passwordgenerate} alt = "this is my project" />
    <a href="https://github.com/sensational11/Password-Generator">Password Generator Repo</a> <br>
    </br>
    <a href="https://sensational11.github.io/Password-Generator/">Password Generator Assignment</a>
    </div>
    </section>
  );
}

export default Projects;
