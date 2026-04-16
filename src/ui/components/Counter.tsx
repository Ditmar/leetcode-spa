import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((prev) => prev + 1)}>Count: {count}</button>;
};

export default Counter;
