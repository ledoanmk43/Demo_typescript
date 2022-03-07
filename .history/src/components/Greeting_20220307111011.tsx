import React from "react";

type GreetingProps = {
  nameProps: string;
};

const Greeting = (nameProps: GreetingProps) => {
  return (
    <div>
      <h2>Hello world {nameProps.nameProps}</h2>
    </div>
  );
};

export default Greeting;
