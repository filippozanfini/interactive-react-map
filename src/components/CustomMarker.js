import React from "react";
import { MapContext } from "react-map-gl";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import { setNumber } from "../store/actions/map";

const CustomMarker = (props) => {
  const context = React.useContext(MapContext);
  const dispatch = useDispatch();
  const selectedMarker = useSelector((state) => state.map.selectedNumber);

  const { longitude, latitude } = props;

  const [x, y] = context.viewport.project([longitude, latitude]);

  const clickHandler = () => {
    dispatch(setNumber(props.name));
  };

  return (
    <div
      className={
        selectedMarker === props.name ? "SelectedMarker" : "CustomMarker"
      }
      style={{ left: x, top: y }}
      onClick={clickHandler}
    >
      {props.name}
    </div>
  );
};

export default CustomMarker;
