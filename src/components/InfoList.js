import React from "react";
import Card from "./Card";

const InfoList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        height: "500px",
        width: "500px",
      }}
    >
      <div
        style={{
          width: "70%",
          backgroundColor: "black",
          borderTopLeftRadius: "7px",
          borderTopRightRadius: "7px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ width: "100%", marginLeft: "20px", color: "white" }}>
          Itinerario
        </h1>
      </div>
      {props.markers.map((marker) => {
        return (
          <Card
            number={marker.number}
            name={marker.name}
            address={marker.address}
          />
        );
      })}
    </div>
  );
};

export default InfoList;
