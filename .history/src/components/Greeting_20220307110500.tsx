import React from "react";

type Props = {
  name: string;
};

const Greeting = ({ nameProps }) => {
  return (
    <div>
      <h2>Hello world {nameProps}</h2>
    </div>
  );
};

export default Greeting;
