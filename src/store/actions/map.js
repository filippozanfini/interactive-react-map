export const SET_MARKER = "SET_NUMBER";

export const setMarker = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_MARKER, id });
  };
};
