import React from "react";

import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const Name = {
    firstName: "Đoàn",
    lastName: "Lê",
  };
  return (
    <div className="App">
      <Greeting nameProps={Name} />
    </div>
  );
}

export default App;
