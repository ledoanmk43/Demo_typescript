import React, { useReducer } from "react";

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>Counter</div>;
};

export default Counter;
