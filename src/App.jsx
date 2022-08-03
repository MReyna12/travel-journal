import React from "react";
import Card from "./components/Card/index";
import travelData from "./data";
import "./App.css";

function App() {
  const cards = travelData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return <main>{cards}</main>;
}

export default App;
