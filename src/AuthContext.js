import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('loggedIn'));

  const login = () => {
    localStorage.setItem('loggedIn', 'true');
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
