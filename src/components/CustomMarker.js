import React from "react";
import { MapContext } from "react-map-gl";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { setMarker } from "../store/actions/map";

const CustomMarker = (props) => {
  const context = React.useContext(MapContext);
  const dispatch = useDispatch();
  const selectedMarker = useSelector((state) => state.map.selectedMarker);

  const { longitude, latitude } = props;

  const [x, y] = context.viewport.project([longitude, latitude]);

  const clickHandler = () => {
    dispatch(setMarker(props.id));
  };

  return (
    <div
      className={
        selectedMarker === props.id ? "SelectedMarker" : "CustomMarker"
      }
      style={{ left: x, top: y }}
      onClick={clickHandler}
    >
      {selectedMarker === props.id ? (
        <div
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            backgroundColor: "#005375",
            borderRadius: "100px",
            marginBottom: "130px",
          }}
        >
          <p style={{ color: "white", fontSize: "12px", textAlign: "center" }}>
            {props.name}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default CustomMarker;
