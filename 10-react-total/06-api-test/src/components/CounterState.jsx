import { useCounter } from "../context/CounterContext";

const CounterState = () => {
  const { countState, setCountState } = useCounter();

  return (
    <div>
      <p>{countState}</p>
      <button onClick={() => setCountState((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default CounterState;
