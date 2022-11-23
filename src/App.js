import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sneakerbg from "./images/sneakerbg.jpg";
import "./App.css";
import Navbar from "./components/Navbar";

import Header from "./components/Header";
import HomePage from "./components/Homepage";
// import AboutMe from "./components/Aboutme";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";

//jsx allows us to inject HTML into our Javascript files
function App() {
   
    
  const [pages] = useState([
    {
      name: "About Me",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    { <div>
      <img src={sneakerbg} alt = "this is sneaker bg" />
    </div> }
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <HomePage currentPage={currentPage}></HomePage>
      </main>
      <Footer />
    </>
  );
}

export default App;
