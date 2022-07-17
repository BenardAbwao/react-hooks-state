import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    console.log(`after setState: ${count}`);
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
