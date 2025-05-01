import React,{Children, createContext , useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(() =>{
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;

    }); 


    const login = (userData) =>{
        setUser(userData);
        localStorage.setItem('user' , JSON.stringify(userData));

    }

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
    };

    const register = (userData) => {
       
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      };

    useEffect (() =>{

    },[])



    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
          {children}
        </AuthContext.Provider>
      );

}
