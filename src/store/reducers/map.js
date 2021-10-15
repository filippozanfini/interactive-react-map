import { SET_MARKER } from "../actions/map";

const initialState = {
  selectedMarker: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MARKER: {
      return {
        ...state,
        selectedMarker: action.id,
      };
    }
  }

  return state;
};
