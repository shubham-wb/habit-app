import React from "react";
import { connect } from "react-redux";

import "../assets/css/Navbar.css";

function Navbar(props) {
  let today = new Date().toLocaleDateString();
  return (
    <>
      <nav>
        <h2>Habit App</h2>
        <div className="present-date">Date : {today}</div>
        <div
          style={{
            color: "grey",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          You are tracking
          <span
            style={{
              margin: "10px",
              color: "grey",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "yellow",
              borderRadius: "50%",
            }}
          >
            {props.list.length}
          </span>{" "}
          Habits
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};
export default connect(mapStateToProps)(Navbar);
