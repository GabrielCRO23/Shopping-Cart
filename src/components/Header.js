import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";

function Header({ cart }) {
  return (
    <div>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: { md: "flex-end", xs: "center" },
        }}
      >
        <Toolbar variant="dense">
          <Button sx={{ color: "#666666" }}>Home</Button>
          <Button sx={{ color: "#666666" }}>Products</Button>
          <Button
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
