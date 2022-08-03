import React from "react";
import Card from "./components/Card/index";
import Header from "./components/Header/index";
import travelData from "./data";
import "./App.css";

function App() {
  const cards = travelData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Header />
      <main>{cards}</main>
    </div>
  );
}

export default App;
