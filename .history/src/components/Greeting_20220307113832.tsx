import React from "react";

// type GreetingProps = {
//   nameProps: string;
// };

type GreetingProps = {
  nameProps: {
    firstName: string;
    lastName: string;
  }[];
};

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      {props.nameProps.map((prop) => (
        <h2>{prop}</h2>
      ))}
    </div>
  );
};

export default Greeting;
