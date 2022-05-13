import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/index.js";
import About from ".//components/About/index.js";
import Projects from "./components/Projects/index.js";
import Contact from "./components/Contact/index.js";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/react_portfolio/" element={<Home />} />
            <Route path="/react_portfolio/About" element={<About />} />
            <Route path="/react_portfolio/Projects" element={<Projects />} />
            <Route path="/react_portfolio/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
