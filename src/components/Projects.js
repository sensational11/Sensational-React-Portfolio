import React from "react";
import passwordgenerate from "../images/passwordgenerate.jpg";
import firstbaby from "../images/firstbaby.jpg";
import meta8 from "../images/meta8.jpg";
function Projects() {
  return (
    <section>
      <div className="chesstutorial">
        <img src={chesstutorial} alt="this is my chess tutorial project" />
        <a href="https://github.com/MadeOfBees/chess-tutorials">
          Chess Tutorial Repo
        </a>{" "}
        <br></br>
        <a href="https://chesstutorials.netlify.app/">
          Chess Tutorial Assignment
        </a>
      </div>
      <div className="passwordgeneratorproject">
        <img src={passwordgenerate} alt="this is my password generator project" />
        <a href="https://github.com/sensational11/Password-Generator">
          Password Generator Repo
        </a>{" "}
        <br></br>
        <a href="https://sensational11.github.io/Password-Generator/">
          Password Generator Assignment
        </a>
      </div>
      <div className="secondproject">
        <img src={firstbaby} alt="this is my  first team project" />
        <a href="https://github.com/Wakasagi-Burt/first-baby">
          Film Detective Project Repo
        </a>{" "}
        <br></br>
        <a href="https://wakasagi-burt.github.io/first-baby/">
          Film Detective Project Assignment
        </a>{" "}
        <br></br>
      </div>
      <div className="thirdproject">
        <img src={meta8} alt="this is my  second team project" />
        <a href="https://github.com/Spugety/Metat8">Metat8 Project Repo</a>{" "}
        <br></br>
        <a href="https://metat8.herokuapp.com/">Metat8 Project Assignment</a> <br></br>
      </div>
    </section>
  );
}

export default Projects;
