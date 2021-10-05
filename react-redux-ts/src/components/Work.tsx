import { useState } from "react";

export const Work = (): JSX.Element => {
  const numberState = 0;
  const [count, setCount] = useState(numberState);

  const increment = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Work file</h1>
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(numberState)}>Reset</button>
    </div>
  );
};
