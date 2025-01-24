import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CursorHover from "./utils/Hover";
import Ethos from "./pages/Ethos";
import Careers from "./pages/Careers";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      {/* Global CursorHover component */}
      {/*  <CursorHover />*/}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Ethos" element={<Ethos />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
