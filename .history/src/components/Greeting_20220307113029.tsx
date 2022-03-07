import React from "react";

// type GreetingProps = {
//   nameProps: string;
// };

type GreetingProps = {
  nameProps: {
    firstNam: string;
    lastName: string;
  };
};

const Greeting = (props: GreetingProps) => {
  return (
    <div>
      <h2>Hello world {props.nameProps.firstNam}</h2>
    </div>
  );
};

export default Greeting;
