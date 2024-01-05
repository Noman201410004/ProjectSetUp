import React, { memo, useMemo } from 'react';

const Message = ({ count,btnHandler }) => {
  console.log("Massage information")
 const numbering=useMemo(()=>{
    let number=0;
            for(let i=0;i<=50000000;i++)
            {
              number++
            }

            return number;
  },[])
  return (
    <div>
    <h1>numbering:{numbering}</h1>
      <h1>Message Count: {count} information</h1>
      <button onClick={btnHandler}>Increase Number of Massage</button>
    </div>
  );
};

export default memo(Message);