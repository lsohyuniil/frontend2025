import { useCounterStore } from "./store";

const CounterZustand = () => {
  const { count, setCount } = useCounterStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={setCount}>+</button>
    </div>
  );
};

export default CounterZustand;
