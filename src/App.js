import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/index.js";
// import About from ".//components/About/index.js";
import Projects from "./components/Projects/index.js";
// import Contact from "./components/Contact/index.js";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="/Projects" element={<Projects />} />
            {/* <Route path="/Contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
