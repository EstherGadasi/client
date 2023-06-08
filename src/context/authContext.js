import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    
    
    JSON.parse(localStorage.getItem("user")) || null
  );
  //console.log(JSON.parse(localStorage.getItem("user")),"llllllllll")
  const [err, seterr] = useState(
  );
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );


  const login = async ({ username, password,setflag }) => {
    const res = await axios.post(
      "http://localhost:4000/api/auth/login",
      { username, password },
      // {
      //   withCredentials: true,
      // }
    );
    console.log(res.data)
    seterr(res.data)
    
    setCurrentUser(res.data.user)

    setToken(res.data.accessToken);
  };
  
  const logout = () => {

    setCurrentUser(null);
    setToken(null);
  };
  useEffect(() => {
    localStorage.setItem("user",  JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
// const navigate = useNavigate()
  return(
    <AuthContext.Provider value={{currentUser, token, login, logout, setCurrentUser, setToken,err}}>
        {children}
    </AuthContext.Provider>

  )
};
