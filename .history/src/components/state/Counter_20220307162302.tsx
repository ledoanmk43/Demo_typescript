import React, { useReducer } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState, third);

  return <div>Counter</div>;
};

export default Counter;
