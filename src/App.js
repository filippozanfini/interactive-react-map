import * as React from "react";
import InfoList from "./components/InfoList";
import Map from "./components/Map";

function App() {
  const markers = [
    {
      id: 1,
      name: "Colosseo",
      address: "Piazza del Colosseo, 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
      lat: 41.8888232,
      long: 12.4905579,
    },
    {
      id: 2,
      name: "Foro Romano",
      address: "Via della Salara Vecchia, 5/6",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/1200px-Foro_Romano_Musei_Capitolini_Roma.jpg",
      lat: 41.9022952,
      long: 12.4935645,
    },
    {
      id: 3,
      name: "Fontana di Trevi",
      address: "Piazza di Trevi",
      image:
        "https://lh3.googleusercontent.com/proxy/7QPRgYet72HFMIaW1FxlSry2yZC155AH4d6-qZ_cDWrvcuequ3WQL6VGO_4x8cyMfDAeAOMGCdkoYDDDZB5zo-Rm3pfS1EeOuu64wvoqgzU5Sp6TyBaYCRWyRjfa7GuPSNK1__f_uhU",
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
        alignItems: "flex-start",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <InfoList markers={markers} />
      <Map markers={markers} />
    </div>
  );
}

export default App;
