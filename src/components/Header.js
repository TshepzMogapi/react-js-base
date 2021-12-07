import { useContext } from 'react';
import AuthContext from '../store/auth-context';
const Header = (props) => {

  const ctx = useContext(AuthContext);

    return (
      <>
      <h2>This is the App</h2>
      <button onClick={ctx.onLogout}>
        Logout        
      </button>
      <h3>User Logged In {ctx.isLoggedIn ? 'True' : 'False'} </h3>
      </>
    )
};

export default Header;
