import { Fragment, useContext } from "react";
import classes from "./header.module.css";
import AuthContext from "../../store/auth-context";
import CartSummaryCount from "../cart-summary-count/cart-summary-count";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";

const Header = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <header style={{
      backgroundColor:"rgb(0, 30, 60);"
    }}>
      <AppBar>
        <Toolbar>
          <MenuItem>World</MenuItem>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
