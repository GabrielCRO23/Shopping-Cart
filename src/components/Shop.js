import React, { useState } from "react";
import products from "../data/products.json";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Product from "./Product";
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
    <Grid
      sx={{
        marginLeft: "auto",
        marginTop: "2rem",
        marginBottom: "20rem",
      }}
      container
      spacing={5}
    >
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <Grid item xs={12} sm={4}>
            <Product {...product} />
          </Grid>
        </React.Fragment>
      ))}
      <Button variant="contained">Click me!</Button>
    </Grid>
  );
}

export default Shop;
