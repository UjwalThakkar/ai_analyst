import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Graphs from "./components/Graphs";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Dashboard2 from "./pages/Dashboard2";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard2 />} />
        <Route path="/Graphs" element={<Graphs />} />
        {/* <Dashboard /> */}
        {/* <Graphs /> */}
      </Routes>
    </Router>
  );
}

export default App;
