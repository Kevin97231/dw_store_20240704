import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

export const CounterRedux = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button className="btn " onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};
