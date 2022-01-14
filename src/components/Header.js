import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Button from "@mui/material/Button";

const Header = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <h2>This is the App</h2>
      <Button onClick={ctx.onLogout} variant="contained">
        Logout
      </Button>
      ;<h3>User Logged In {ctx.isLoggedIn ? "True" : "False"} </h3>
    </>
  );
};

export default Header;
