import React, { useContext, useState } from "react";
const AuthContext=React.createContext(
    {
        token:'',
        isLoggedIn: false,
        login:(token)=>{},
        logout:()=>{}

    }
);
export const AuthContextProvider=(props)=>{
    const[token,setToken]=useState(null)
    const userIsloggedIn = !!token;

    const loginHandler=(token)=>{
        setToken(token);
    };
    const logOutHandler=()=>{
        setToken(null);
    };
    const contextValue={
        token:token,
        isLoggedIn:userIsloggedIn,
        login:loginHandler,
        logout:logOutHandler
    };
    return <AuthContext.Provider value={contextValue}>{props.children} </AuthContext.Provider>
}

export default AuthContext; 

