import * as React from "react";
import { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import CustomMarker from "./CustomMarker";

const Map = ({ markers }) => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZmlsaXBwb3phbmZpbmkiLCJhIjoiY2t1M3VyYTY0NGw3dzMwbXB4ODJidzh4dyJ9.d_6YfRQ-TgJNYP0GHGl4Mg";

  const [viewport, setViewport] = useState({
    latitude: 41.9027835,
    longitude: 12.4963655,
    zoom: 12,
  });

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <div
      style={{
        width: "70%",
        height: "500px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 0px 34px -13px #D3D3D3",
        marginRight: "30px",
      }}
    >
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        width="100%"
        height="100%"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl style={navControlStyle} showCompass={false} />
        <CustomMarker
          id={markers[0].id}
          latitude={markers[0].lat}
          longitude={markers[0].long}
          name={markers[0].name}
        />
        <CustomMarker
          id={markers[1].id}
          latitude={markers[1].lat}
          longitude={markers[1].long}
          name={markers[1].name}
        />
        <CustomMarker
          id={markers[2].id}
          latitude={markers[2].lat}
          longitude={markers[2].long}
          name={markers[2].name}
        />
      </ReactMapGL>
    </div>
  );
};

export default Map;
