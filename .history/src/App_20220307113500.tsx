import React from "react";

import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const Name = {
    firstName: "Đoàn",
    lastName: "Lê",
  };

  const nameList = [
    {
      firstName: "Đoàn",
      lastName: "Lê",
    },
    {
      firstName: "Đoàn",
      lastName: "Lê",
    },
    {
      firstName: "Đoàn",
      lastName: "Lê",
    },
  ];
  return (
    <div className="App">
      <Greeting nameProps={nameList} />
    </div>
  );
}

export default App;
