import React from "react";

// type GreetingProps = {
//   nameProps: string; //we can also assign value like 'Doan' | 'Duy' | 'Phuc' - if there are more than 1 value for the props and we need to check cases
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
      <h2>{emptyProps}</h2>
      {props.nameProps.map((prop) => (
        <h2>{prop.firstName}</h2>
      ))}
    </div>
  );
};

export default Greeting;
