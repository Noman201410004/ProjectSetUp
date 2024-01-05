import React, { memo } from 'react';

const Message = ({ count,btnHandler }) => {
  console.log("Massage information")
  return (
    <div>
      <h1>Message Count: {count} information</h1>
      <button onClick={btnHandler}>Increase Number of Massage</button>
    </div>
  );
};

export default memo(Message);