// 전역 상태값을 읽고 변경하는데 필요한 훅 불러오기
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/CounterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </p>
    </div>
  );
};

export default Counter;
