import React from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { setMarker } from "../store/actions/map";

const Card = (props) => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.map.selectedMarker);

  const clickHandler = () => {
    dispatch(setMarker(props.id));
  };

  return (
    <div
      className={selectedCard === props.id ? "SelectedCard" : "Card"}
      onClick={clickHandler}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <img
          alt={props.name}
          src={props.image}
          style={{
            width: "100px",
            height: "70px",
            borderRadius: "5px",
            boxShadow: "0px 0px 34px 1px #D3D3D3",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "20px",
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
