import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;