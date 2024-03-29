import { useSelector, useDispatch } from "react-redux/";
import { increament, decreament, reset, incrementByAmount } from "../../modules/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button><br/>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>

        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
