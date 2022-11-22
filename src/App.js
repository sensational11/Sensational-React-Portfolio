import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";

import { HomePage } from "./components/homepage";

import {Footer} from "./components/footer";
// import aboutme from './aboutme';

//jsx allows us to inject HTML into our Javascript files
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Header" element={<Header />}></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
