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
        width: "30%",
        boxShadow: "0px 0px 34px -13px #D3D3D3",
        marginRight: "30px",
        marginLeft: "30px",
        height: "500px",
        overflowY: "scroll",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          borderTopLeftRadius: "7px",
          borderTopRightRadius: "7px",
          marginBottom: "10px",
        }}
      >
        <h2 style={{ width: "100%", marginLeft: "20px" }}>
          Punti di interesse
        </h2>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        {props.markers.map((marker) => {
          return (
            <Card
              id={marker.id}
              name={marker.name}
              address={marker.address}
              image={marker.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InfoList;
