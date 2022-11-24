import React from "react";
import reactresume from "../resume/ReactResume.pdf";
function Resume() {
  return (
    <section>
      <div className="pdfresume">
        <a href = {reactresume}>My React Resume</a>
      </div>
      <br>
      </br>
      <div className="proficiences">
        <ul>
            <li>
                React
            </li>
            <li>
                Javascript
            </li>
            <li>
                Node
            </li>
            <li>
                MySQL
            </li>
            <li>
                MonogoDB
            </li>
            <li>
                JQuery
            </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
