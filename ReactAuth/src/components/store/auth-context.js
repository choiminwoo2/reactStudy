import React, { useEffect, useState, useCallback } from "react";
let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTtime = new Date(expirationTime).getTime();

  return adjExpirationTtime - currentTime;
};

const retrieveStoredToken = () =>{
  const storedToken = localStorage.getItem('token');
  const storedExpirationData = localStorage.getItem('expirationTime')

  const remiainingTime = calculateRemainingTime(storedExpirationData);

  if(remiainingTime <= 3600){
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime')
    return null;
  }

  return {
    token: storedToken,
    duration: remiainingTime
  }
}

export const AuthContextPorvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if(tokenData) initialToken = tokenData.token;
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('expirationTime', expirationTime);
    localStorage.setItem('token',token);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if(logoutTimer){
      clearTimeout(logoutTimer);
    }
  },[]);

  useEffect(()=>{
    if(tokenData){
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  },[tokenData,logoutHandler])

  const contextVlaue = {
    token : token,
    isLoggedIn: userIsLoggedIn,
    login : loginHandler,
    logout: logoutHandler
  }

  return <AuthContext.Provider value={contextVlaue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
