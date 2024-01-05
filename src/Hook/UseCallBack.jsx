import React, { useCallback, useState } from 'react';
import Message from '../Components/Message';

const UseCallBack = () => {
  
    const [count,setCount]=useState(0)
    const [toggle,setToggle]=useState(false)
    console.log("first")
    const btnHandler=useCallback(()=>{
      setCount(count+1)
    },[count])
    return (
      <section>
        {
          toggle?"on":"off"
        }
        <button onClick={()=>setToggle(!toggle)}>Toggle Value</button>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase click</button>
        <Message count={count} btnHandler={btnHandler} ></Message>
      </section>
    );
};

export default UseCallBack;