"use client";

import React, { PropsWithChildren } from "react";

type Counter = {
  count: number;
  increment: () => void;
};

const CounterContext = React.createContext<Counter | null>(null);

export function useCounter() {
  const counter = React.useContext(CounterContext);

  if (!counter) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return counter;
}

export function Counter(props: PropsWithChildren) {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const memoizedValue = React.useMemo(
    () => ({ count, increment }),
    [count, increment]
  );

  return (
    <CounterContext.Provider value={memoizedValue}>
      {props.children}
    </CounterContext.Provider>
  );
}

export function CounterDisplay() {
  const { count } = useCounter();

  return <div>Count: {count}</div>;
}

export function CounterButton() {
  const { increment } = useCounter();

  return <button onClick={increment}>Increment</button>;
}
