import React, { useState } from "react";
import { connect } from "react-redux";
import { addHabit, removeHabit } from "../actions";

import "../assets/css/Home.css";

function Home(props) {
  let [value, setValue] = useState("");

  function addHabits(value) {
    let data = {
      title: value,
      id: Date.now(),
      status: [0, 0, 0, 0, 0, 0, 0],
    };
    console.log(props);
    props.addHabit(data);
  }

  function deleteHabit(value) {
    props.removeHabit(value);
  }

  function handleChange(event) {
    setValue(() => {
      value = event.target.value;
    });
  }

  function handleSubmit() {
    let found = false;
    props.list.map((elem) => {
      if (elem.title === value) {
        found = true;
      }
    });

    if (value === undefined || value === "") {
      alert("please add something");
    } else if (!found && value != undefined) {
      addHabits(value);
      setValue("");
    } else {
      alert("already added ");
    }
  }

  function handleDeleteHabit(id) {
    deleteHabit(id);
  }

  return (
    <>
      <div className="add-btn">
        <input
          value={value}
          type="text"
          style={{ height: "20px", width: "100px" }}
          onChange={(event) => {
            handleChange(event);
          }}
        ></input>
        <button
          style={{ height: "20px", width: "100px" }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Add Habit
        </button>
      </div>
      <ul className="habits-list">
        {props.list.map((elem) => {
          return (
            <>
              <li key={`${elem["id"]}`}>
                <h1>{elem.title}</h1>

                <button
                  onClick={() => {
                    handleDeleteHabit(elem.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  const { list } = state;
  return { list };
};
export default connect(mapStateToProps, { addHabit, removeHabit })(Home);
