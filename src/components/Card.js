import React from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { setNumber } from "../store/actions/map";

const Marker = (props) => {
  const markerStyle = {
    position: "absolute",
    background: "black",
    width: "35px",
    height: "35px",
    borderRadius: "40px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  };

  return <div style={markerStyle}>{props.name}</div>;
};

const Card = (props) => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.map.selectedNumber);

  const clickHandler = () => {
    dispatch(setNumber(props.number));
  };

  return (
    <div
      className={selectedCard === props.number ? "SelectedCard" : "Card"}
      onClick={clickHandler}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "40px",
        }}
      >
        <Marker name={props.number} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "40px",
        }}
      >
        <h3 style={{ margin: 0 }}>{props.name}</h3>
        <h5 style={{ margin: 0, marginTop: "4px", color: "#777" }}>
          {props.address}
        </h5>
      </div>
    </div>
  );
};

export default Card;
