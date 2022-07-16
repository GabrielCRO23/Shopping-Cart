import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import RTX3090 from "../images/RTX3090.png";
import RTX3080 from "../images/RTX3080.png";
import RTX3070 from "../images/RTX3070.png";
import RTX3060 from "../images/RTX3060.png";
import RTX3060TI from "../images/RTX3060TI.png";
import RTXA6000 from "../images/RTXA6000.png";
import A40 from "../images/A40.png";
import Typography from "@mui/material/Typography";

function Shop({ cart, setCart }) {
  const [isActive, setIsActive] = useState(false);
  function handleCart(event) {
    setCart(cart + 1);
    setIsActive((current) => !current);
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = "ADDED TO CART";
  }
  return (
    <div>
      <Box mt={10} display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        <Box border="2px solid white">
          <img src={RTX3090} />
          <Typography align="center" color="white">
            RTX3090
          </Typography>
          <Box display="flex">
            <Typography className="priceTag">$1499.00</Typography>
            <button
              style={{ fontStyle: isActive ? "italic" : "normal" }}
              onClick={(event) => handleCart(event)}
              className="cartButton"
            >
              ADD TO CART
            </button>
          </Box>
        </Box>
        <Box border="2px solid white">
          <img src={RTX3080} />
        </Box>
        <Box border="2px solid white">
          <img src={RTX3070} />
        </Box>
        <Box border="2px solid white">
          <img src={RTX3060} />
        </Box>
        <Box border="2px solid white">
          <img src={A40} />
        </Box>
        <Box border="2px solid white">
          <img src={RTX3090} />
        </Box>
        <Box border="2px solid white">
          <img src={RTX3090} />
        </Box>
        <Box border="2px solid white">
          <img src={RTX3090} />
        </Box>
        <Box border="2px solid white">
          <img src={RTX3090} />
        </Box>
      </Box>
    </div>
  );
}

export default Shop;
