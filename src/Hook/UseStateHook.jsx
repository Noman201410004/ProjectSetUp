import React, { useState } from 'react';

const UseStateHook = () => {
    const [age,setAge]=useState(28)
    console.log(setAge)
    console.log(age)
    return (
      <div >
        <h1 style={{color:"purple",marginLeft:"90px"}}>{age}</h1>
         <button onClick={()=>setAge(age+1)} style={{background:"green",color:"white",padding:"10px"}}>Age Increase</button>
         <button onClick={()=>setAge(age-1)} style={{background:"red",color:"white",padding:"10px",marginLeft:"5px"}}>Age Decrease</button>
      </div>
    );
};

export default UseStateHook;