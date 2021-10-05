import { useState } from "react";

const defaultState = 0;

export const Home = () => {
  const [count, setCount] = useState(defaultState);

  const increment = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(defaultState)}>Reset</button>
    </div>
  );
};
