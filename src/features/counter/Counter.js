import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = React.useState("");
  const addAmount = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          name="incrementAmount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(addAmount));
          }}
        >
          Add Amount
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(addAmount));
          }}
        >
          Decrement
        </button>
      </div>
      <button onClick={resetAll}>reset</button>
    </section>
  );
};

export default Counter;
