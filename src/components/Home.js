import React, { useState } from "react";
import { connect } from "react-redux";
import { addHabit, removeHabit } from "../actions";

import "../assets/css/Home.css";

function Home(props) {
  let [value, setValue] = useState(""); //state to take input as controlled action

  //function to dispatch addHabit action
  function addHabits(value) {
    let data = {
      title: value,
      id: Date.now(),
      status: [0, 0, 0, 0, 0, 0, 0],
    };

    props.addHabit(data);
  }
  //function to dispatch removehabit action
  function deleteHabit(value) {
    props.removeHabit(value);
  }
  //function to handle submit habit btn
  function handleSubmit() {
    let found = false;
    props.list.map((elem) => {
      if (elem.title === value) {
        found = true;
      }
    });
    //adding check to prevent user from adding blank habit
    if (value === undefined || value === "") {
      alert("Please add some habit");
    } else if (!found && value != undefined) {
      addHabits(value);
      setValue("");
    } else {
      alert("Already added ");
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
          onChange={(e) => {
            setValue(e.target.value); //controlled by state
          }}
        ></input>
        <button
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
              <li key={elem}>
                <h1 key={elem.title}>{elem.title}</h1>
                <button
                  key={elem.id}
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

// passing global state stored in store to component as prop
//dispatching to action from component itself
export default connect(mapStateToProps, { addHabit, removeHabit })(Home);
