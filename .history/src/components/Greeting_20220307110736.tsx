import React from "react";

type Props = {
  name: string;
};

const Greeting = (nameProps: Props) => {
  return (
    <div>
      <h2>Hello world {nameProps.name}</h2>
    </div>
  );
};

export default Greeting;
