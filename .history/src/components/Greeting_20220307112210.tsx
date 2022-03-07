import React from "react";

type GreetingProps = {
  nameProps: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <h2>Hello world {props.nameProps}</h2>
    </div>
  );
};

export default Greeting;
