import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home({ toggle, setToggle }) {
  function toggleDrawer() {
    if (toggle == true) setToggle(!toggle);
  }
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="center" variant="h4" color="primary">
          NVIDIA GRAPHICS CARDS
        </Typography>
        <Typography align="center" variant="subtitle1" color="secondary">
          NVIDIA RTX™ graphics cards are bringing the power of real-time ray
          tracing and AI to the applications you use every day.
        </Typography>
        <Link style={{ textDecoration: "none" }} to="/products">
          <Button
            onClick={toggleDrawer}
            sx={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "0px",
              fontSize: "16px",
            }}
            variant="contained"
            color="primary"
          >
            View Store
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Home;
