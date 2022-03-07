import React from "react";

import "./App.css";
import Greeting from "./components/Greeting";
import Login from "./components/state/Login";
import Counter from "./components/state/Counter";

function App() {
  // const Name = {
  //   firstName: "Đoàn",
  //   lastName: "Lê",
  // };

  const nameList = [
    {
      firstName: "Đoàn",
      lastName: "Lê",
    },
    {
      firstName: "Phúc",
      lastName: "Lê",
    },
    {
      firstName: "Duy",
      lastName: "Lê",
    },
  ];
  return (
    <div className="App">
      <Greeting nameProps={nameList} />
      <Login />
      <Counter />
    </div>
  );
}

export default App;
