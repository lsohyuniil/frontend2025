import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export const CounterProvider = ({ Children }) => {
  const [countState, setCountState] = useState(0);

  return (
    <CounterContext.Provider value={{ countState, setCountState }}>
      {Children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
