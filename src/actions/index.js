// action types
export const ADD_HABIT = "ADD_HABIT";
export const REMOVE_HABIT = "REMOVE_HABIT";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

// action creators
export function addHabit(habit) {
  return {
    type: ADD_HABIT,
    habit,
  };
}

// action creators
export function removeHabit(habit) {
  return {
    type: REMOVE_HABIT,
    habit,
  };
}

export function toggleHabitStatus(index, id, value) {
  return {
    type: TOGGLE_STATUS,
    id,
    index,
    value,
  };
}
