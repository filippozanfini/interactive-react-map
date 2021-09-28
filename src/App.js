import * as React from "react";
import InfoList from "./components/InfoList";
import Map from "./components/Map";

function App() {
  const markers = [
    {
      number: 1,
      name: "Colosseo",
      address: "Piazza del Colosseo, 1",
      lat: 41.8888232,
      long: 12.4905579,
    },
    {
      number: 2,
      name: "Foro Romano",
      address: "Via della Salara Vecchia, 5/6",
      lat: 41.9022952,
      long: 12.4935645,
    },
    {
      number: 3,
      name: "Fontana di Trevi",
      address: "Piazza di Trevi",
      lat: 41.8970614,
      long: 12.4803449,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <InfoList markers={markers} />
      <Map markers={markers} />
    </div>
  );
}

export default App;
