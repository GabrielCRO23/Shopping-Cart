import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Header({ cart, toggle, setToggle, animation }) {
  function toggleDrawer() {
    if (window.innerWidth < 1850 || toggle == true) setToggle(!toggle);
  }

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: { md: "flex-end", xs: "center" },
        }}
      >
        <Toolbar variant="dense">
          <Link style={{ textDecoration: "none" }} to="/shopping-cart">
            <Button sx={{ color: "#666666" }}>Home</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products">
            <Button sx={{ color: "#666666" }}>Products</Button>
          </Link>
          <Button
            onClick={toggleDrawer}
            className="shopping-cart"
            animation={animation}
            sx={{ color: "#666666" }}
            startIcon={<ShoppingCartOutlinedIcon />}
          >
            {cart}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
