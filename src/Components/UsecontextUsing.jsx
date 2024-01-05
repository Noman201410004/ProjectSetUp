import React, { useContext } from 'react';
import { AuthText } from '../Hook/UseContext';

const UsecontextUsing = () => {
    const {a}=useContext(AuthText)
    console.log(a)
    return (
        <div>
           
        </div>
    );
};

export default UsecontextUsing;