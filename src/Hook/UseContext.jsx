import React,{ createContext }  from 'react';

export const AuthText=createContext()
const UseContext = ({children}) => {
    
    const a=10;
    const info={
        a
    }
    return (
        <AuthText.Provider value={info}>
            {children}
        </AuthText.Provider>
    );
};

export default UseContext;