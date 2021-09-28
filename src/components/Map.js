import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import CustomMarker from "./CustomMarker";

const Map = ({ markers }) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZmlsaXBwb3phbmZpbmkiLCJhIjoiY2t1M3VyYTY0NGw3dzMwbXB4ODJidzh4dyJ9.d_6YfRQ-TgJNYP0GHGl4Mg";
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 41.9027835,
    longitude: 12.4963655,
    zoom: 12,
  });

  return (
    <div
      style={{
        width: "40%",
        height: "500px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <CustomMarker
          latitude={markers[0].lat}
          longitude={markers[0].long}
          name={markers[0].number}
        />
        <CustomMarker
          latitude={markers[1].lat}
          longitude={markers[1].long}
          name={markers[1].number}
        />
        <CustomMarker
          latitude={markers[2].lat}
          longitude={markers[2].long}
          name={markers[2].number}
        />
      </ReactMapGL>
    </div>
  );
};

export default Map;
