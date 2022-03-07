import { useReducer } from "react";

const initialState = { count: 0 };

// type CounterAction = { type: "incre" | "decre" | "reset"; payload?: number };

// function reducer(state: StateCounter, action: CounterAction) {
//   switch (action.type) {
//     case "incre":
//       return { count: state.count + action.payload || 0 };
//     case "decre":
//       return { count: state.count - action.payload || 0 };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   } //this is not smart

type updateAction = { type: "incre" | "decre"; payload?: number };
type resetAction = { type: "reset" };

type CounterState = { count: number };
type CounterAction = updateAction | resetAction;

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "incre":
      return { count: state.count + action.payload };
    case "decre":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
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
