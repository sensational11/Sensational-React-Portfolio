import { React } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

// import Navbar from "./components/Navbar";
// import { Header } from "./components/Header";
// import { HomePage } from "./components/Homepage";
// import { AboutMe } from "./components/Aboutme";
// import { Resume } from "./components/Resume";
// import { Footer } from "./components/Footer";

//jsx allows us to inject HTML into our Javascript files
function App() {
  return <Navbar />
    // <div className="App">
      // {
      /* <Router>
        <Route path="/Header" element={<Header />}></Route>
        <Routes>
          <Route path="/Navbar" element={<Navbar />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </Router> */
      
      /* <div className="backGroundColor">
        style = {{
          backGroundColor: "green",
          width: "100px",
          height: "100px"
        }}
        
      </div> */}
    // </div>
    
  // );


export default App;
