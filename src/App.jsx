import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CursorHover from "./utils/Hover";
import Ethos from "./pages/Ethos";

function App() {
  return (
    <Router>
      {/* Global CursorHover component */}
      <CursorHover />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Ethos" element={<Ethos />} />
      </Routes>
    </Router>
  );
}

export default App;
