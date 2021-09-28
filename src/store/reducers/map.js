import { SET_NUMBER } from "../actions/map";

const initialState = {
  selectedNumber: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER: {
      return {
        ...state,
        selectedNumber: action.number,
      };
    }
  }

  return state;
};
