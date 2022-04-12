import React, { useState } from "react";
import { connect } from "react-redux";
import "../assets/css/WeekView.css";
import pending from "../assets/images/pending.png";
import right from "../assets/images/right.png";
import wrong from "../assets/images/wrong.png";
import { toggleHabitStatus } from "../actions";

function WeekView(props) {
  let [update, setUpdate] = useState(0);

  function toggleStatus(habitIndex, index, a) {
    let stat;
    if (a === 2) {
      stat = 0;
    } else {
      stat = a + 1;
    }
    props.toggleHabitStatus(habitIndex, index, stat);
    setUpdate((update = update + 1));
  }

  const d = new Date();
  let day = d.getDay();
  let date = d.getDate();
  let res = date - day;
  let res_arr = [];
  let i = 0;
  while (i < 7) {
    res_arr.push(res);
    res++;
    i++;
  }

  console.log(res_arr);

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      {props.list.map((elem1, j) => {
        j++;
        return (
          <div className="habit-container">
            <div className="week">
              <div className="title"></div>
              <ul className="col-container">
                {week.map((elem, i = 0) => {
                  ++i;
                  return <li id={i}>{elem}</li>;
                })}
              </ul>
            </div>

            <div className="date">
              <div className="title"></div>
              <ul className="col-container">
                {res_arr.map((elem) => {
                  return <li>{elem}</li>;
                })}
              </ul>
            </div>
            <div className="status">
              <div className="title">{elem1.title}</div>
              <ul className="col-container">
                {elem1.status.map((a, k = 0) => {
                  k++;
                  return (
                    <li className="toggle-img">
                      <>
                        {a === 0 ? (
                          <img src={pending} />
                        ) : a === 1 ? (
                          <img src={right} />
                        ) : (
                          <img src={wrong} />
                        )}
                        <button
                          className="toggle-btn"
                          onClick={() => {
                            toggleStatus(j - 1, k - 1, a);
                          }}
                        ></button>
                      </>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};

export default connect(mapStateToProps, { toggleHabitStatus })(WeekView);
