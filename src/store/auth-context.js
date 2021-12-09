import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    localStorage.setItem('currentUser', 1);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider 
      value={{isLoggedIn: isLoggedIn,onLogout: logout, onLogin: login}}
      >{props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
