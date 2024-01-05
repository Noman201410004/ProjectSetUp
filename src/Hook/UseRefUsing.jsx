import React, { useRef } from 'react';

const UseRefUsing = () => {
    const firstname=useRef()

    const formcontrol=(event)=>{
        event.preventDefault()
        const namefirst =firstname.current.value;
        
        console.log(namefirst)
    }
    return (
        <form onSubmit={formcontrol}>
           <label for="fname" > First Name </label>
            <input type = "text" id = "fname" ref = {firstname}/>
         

      
           
             <input type = "submit" value = "Submit"/>
        </form>
    );
};

export default UseRefUsing;
