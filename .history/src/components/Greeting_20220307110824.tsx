import React from "react";

type GreetingProps = {
  name: string;
};

const Greeting = (nameProps: GreetingProps) => {
  return (
    <div>
      <h2>Hello world {nameProps.name}</h2>
    </div>
  );
};

export default Greeting;
