export const SET_NUMBER = "SET_NUMBER";

export const setNumber = (number) => {
  return (dispatch) => {
    dispatch({ type: SET_NUMBER, number });
  };
};
