import React from "react";
import reactresume from "../resume/ReactResume.pdf";
function Resume() {
  return (
    <section>
      <div className="pdfresume">
        <a href = {reactresume}>My React Resume</a>
      </div>
    </section>
  );
}

export default Resume;
