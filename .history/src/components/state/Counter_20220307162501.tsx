import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "up":
      return {count: state.count, +action.payload}
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>Counter</div>;
};

export default Counter;
