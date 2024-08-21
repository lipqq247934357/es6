import React, { useState, useEffect } from 'react';

// 错误版
function MyComponent1() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, [])
  }, [])

  console.log('count', count)
}

// 正确版
function MyComponent2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  console.log('count', count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
