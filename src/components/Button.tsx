import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter-slice/counterSlice";
import type { AppDispatch } from "../redux/store";

const Button = ({ titile }: { titile: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      {titile} <br /> <br />
      <button className="bg-red-500" onClick={() => dispatch(increment())}>
        increment
      </button>{" "}
      <br /> <br />
      <button className="bg-red-500" onClick={() => dispatch(decrement())}>
        decrement
      </button>{" "}
      <br /> <br />
      <button
        className="bg-red-500"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        IncrementBy amount
      </button>
    </div>
  );
};

export default Button;
