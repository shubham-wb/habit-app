import React, { useState } from "react";
import { connect } from "react-redux"; // connect  React component to  Redux store
import "../assets/css/WeekView.css";
import pending from "../assets/images/pending.png";
import right from "../assets/images/right.png";
import wrong from "../assets/images/wrong.png";
import { toggleHabitStatus } from "../actions";

function WeekView(props) {
  let [update, setUpdate] = useState(0); //to rerender the component on status change

  //function to toggle the status of a particular habit taking three inputs

  // 1. index of habit of which status is to be changed
  // 2. day of the status to be changed i.e. id of status property
  // 3. value of status 0-->Pending , 1--> Done 2--> Not Done

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

  //array to display previous dates from present
  const d = new Date();
  let day = d.getDay();
  let i = day + 1;
  let date = d.getDate();
  let res = date - 6;
  let res_arr = [];
  let m = 0;
  while (m < 7) {
    res_arr.push(res);
    res++;
    m++;
  }
  //array to display weeks
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
      {props.list.length != 0 ? (
        props.list.map((elem1, j) => {
          j++;
          return (
            <div className="habit-container">
              <div className="title">
                <h2 style={{ marginTop: "10px" }}>Habits/Day</h2>
                <h1>{elem1.title}</h1>
              </div>
              {/* display  week column   */}
              <div className="data-container">
                <div className="week">
                  <ul className="col-container">
                    {week.map((elem) => {
                      if (i == 7) {
                        i = 0;
                      }
                      i++;
                      return <li key={i}>{week[i - 1]}</li>;
                    })}
                  </ul>
                </div>

                {/*display dates of the week */}
                <div className="date">
                  <ul className="col-container">
                    {res_arr.map((elem) => {
                      return <li key={`date-${elem}`}>{elem}</li>;
                    })}
                  </ul>
                </div>

                <div className="status">
                  <ul className="col-container">
                    {
                      //function to display toggled state
                      elem1.status.map((a, k = 0) => {
                        k++;
                        return (
                          <li key={k} className="toggle-img">
                            <>
                              {a === 0 ? (
                                <img
                                  src={pending}
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="Pending"
                                />
                              ) : a === 1 ? (
                                <img
                                  src={right}
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="Done"
                                />
                              ) : (
                                <img
                                  src={wrong}
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="Not Done"
                                />
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
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        // if there are no habits found display empty message
        <h1
          className="emptyMessage"
          style={{
            fontSize: "2rem",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Habit Found !! Please add Some 🧵
        </h1>
      )}
    </>
  );
}
// connecting component to store
const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};
// passing global state stored in store to component as prop
//dispatching to action from component itself
export default connect(mapStateToProps, { toggleHabitStatus })(WeekView);
