import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [Count,setCount]=useState(0)
    const [item,setItem]=useState(10)
    const UsememoCount = useMemo(
      function multiCount() {
        console.warn("multiCount");
        return Count * 5;
      },
      [Count]
    );
   
    return (
      <div>
        <h1>UseMemo Hook in React</h1>
        <h1>count:{Count}</h1>
        <h1>itemCount:{item}</h1>
        <h1>multiCount:{UsememoCount}</h1>
        <button
          onClick={() => setCount(Count + 1)}
          style={{
            background: "red",
            color: "white",
            padding: "10px",
            marginLeft: "5px",
          }}
        >
          UpdateCount Number
        </button>
        <button
          onClick={() => setItem(item * 10)}
          style={{
            background: "red",
            color: "white",
            padding: "10px",
            marginLeft: "5px",
          }}
        >
          UpdateItem
        </button>
      </div>
    );
};

export default UseMemo;