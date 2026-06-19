import React, { createContext,  useEffect,  useState } from 'react'

export  const Authcontext=createContext();
export  const AuthProvider=({children})=> {
    const[user, setUser]=useState(null);
    useEffect(()=>{
     const usersaved=JSON.parse(localStorage.getItem("logged"));
     if(usersaved){
        setUser(usersaved);
     }
    },[]);
    const signup=(name)=>{
       const save= localStorage.setItem("user",JSON.stringify(name));
        setUser(save);
    }
    const login =(name)=>{
         localStorage.setItem("logged",JSON.stringify(name));
          setUser(name);
    }
    const logout=()=>{
        setUser(null);
        localStorage.removeItem("logged");
    }
  return (
    <Authcontext.Provider value={{user,signup,login,logout}}>
     {children}
    </Authcontext.Provider>
  )
}
