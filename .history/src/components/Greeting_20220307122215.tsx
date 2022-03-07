import React from "react";

// type GreetingProps = {
//   nameProps: string;
// };

type GreetingProps = {
  nameProps: {
    firstName: string;
    lastName: string;
  }[]; //adding [] at the end if prop is an array

  emptyProps?: string;
};

const Greeting = (props: GreetingProps) => {
  const { emptyProps = "not thing to show" } = props;
  return (
    <div>
      <h2>{props.emptyProps}</h2>
      {props.nameProps.map((prop) => (
        <h2>{prop.firstName}</h2>
      ))}
    </div>
  );
};

export default Greeting;
