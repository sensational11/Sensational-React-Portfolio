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
      name: "aboutme",
    },
    {
      name: "projects",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    { <div className="sneaker">
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
