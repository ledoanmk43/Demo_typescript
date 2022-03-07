import { useReducer } from "react";

type StateCounter = { count: number };
type CounterAction = { type: string; payload: number };
const initialState = { count: 0 };

function reducer(state: StateCounter, action: CounterAction) {
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

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decre", payload: 1 })}>
        Decre
      </button>
      <button onClick={() => dispatch({ type: "incre", payload: 1 })}>
        Incre
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Incre</button>
    </div>
  );
};

export default Counter;
