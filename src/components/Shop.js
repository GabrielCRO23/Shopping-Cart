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
    event.currentTarget.textContent = "Added to Cart";
    event.currentTarget.style.color = "#666666";
  }
  // got this from stackoverflow - compares all the values of a property, sorts the lowest ones to the bottom and highest ones to the top of the list
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  }

  const sortedProducts = products.sort(sortByProperty("price")).reverse();
  console.log(sortedProducts);

  return (
    <Grid
      sx={{
        marginLeft: "auto",
        marginTop: "2rem",
      }}
      container
      spacing={5}
    >
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <Grid item xs={12} sm={4}>
            <Product {...product} />
            <button
              className="cartButton"
              onClick={(event) => handleCart(event)}
            >
              Add to Cart
            </button>
          </Grid>
        </React.Fragment>
      ))}
      <Button variant="contained">Click me!</Button>
    </Grid>
  );
}

export default Shop;
