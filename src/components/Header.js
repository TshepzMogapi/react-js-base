import { useState, useEffect, useReducer } from 'react';

const Header = (props) => {

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
    <>
            <h2>This is the App</h2>
        <button onClick={isLoggedIn ? logout : login}>
          {' '}
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        <h3>User Logged In {isLoggedIn ? 'True' : 'False'} </h3>
    </>
  )
};

export default Header;