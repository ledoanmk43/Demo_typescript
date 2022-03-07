import React, { useReducer } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>Counter</div>;
};

export default Counter;
