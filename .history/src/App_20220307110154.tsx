import React from "react";

import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting nameProps={"Đoàn"} />
    </div>
  );
}

export default App;
