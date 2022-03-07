import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "incre":
      return { count: state.count + action.payload };
    case "decre":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>Count: { state: state.count}</div>;
};

export default Counter;
