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
              {/*display days of the week */}

              <div className="week">
                <h2 className="title" style={{ marginTop: "10px" }}>
                  Habits/Day
                </h2>
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

              {/*display days of the week */}
              <div className="date">
                <div className="title"></div>
                <ul className="col-container">
                  {res_arr.map((elem) => {
                    return <li key={`date-${elem}`}>{elem}</li>;
                  })}
                </ul>
              </div>
              <div className="status">
                <h1 className="title">{elem1.title}</h1>
                <ul className="col-container">
                  {elem1.status.map((a, k = 0) => {
                    k++;
                    return (
                      <li key={k} className="toggle-img">
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
        })
      ) : (
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

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};

export default connect(mapStateToProps, { toggleHabitStatus })(WeekView);
