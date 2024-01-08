import React from "react";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <h1 className="title text-center display-4 mt-4">Zootropolis</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;