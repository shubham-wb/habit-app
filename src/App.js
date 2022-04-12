import "./assets/css/Main.css";
import React from "react";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Home from "./components/Home";

import "./assets/css/Main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import WeekView from "./components/WeekView";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Aside />
          <section className="tasks-container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/week-view" element={<WeekView />}></Route>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
