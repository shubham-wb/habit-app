import { ADD_HABIT, REMOVE_HABIT, TOGGLE_STATUS } from "../actions";

const initialHabitState = {
  list: [],
};

export default function habits(state = initialHabitState, action) {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        list: [action.habit, ...state.list],
      };

    case REMOVE_HABIT:
      const filteredArray = state.list.filter(
        (habit) => habit.id !== action.habit
      );

      return {
        ...state,
        list: filteredArray,
      };

    case TOGGLE_STATUS:
      const { list } = state;
      let newList = list;
      newList[action.index].status[action.id] = action.value;
      console.log(newList);
      return { ...state, list: newList };
    default:
      return state;
  }
}
