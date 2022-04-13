import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Home from "./Home";
import Profile from "./profile";
import Notifications from "./notifications";
import WeekView from "./WeekView";

import "../assets/css/Main.css";
import "../assets/css/App.css";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Aside />
        <div className="main">
          <Navbar />
          <section className="tasks-container">
            <Routes>
              <Route path="/" element={<Home />}></Route> {/*Index Page */}
              <Route path="/week-view" element={<WeekView />}></Route>{" "}
              {/*Route to week view  */}
              <Route path="/profile" element={<Profile />}></Route>{" "}
              {/*Route to profile section of user  */}
              <Route
                path="/notifications"
                element={<Notifications />}
              ></Route>{" "}
              {/*Route to show any pending notifications */}
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
