import React, { useState, useEffect } from "react";
import products from "../data/products.json";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Product from "./Product";
import Typography from "@mui/material/Typography";
console.log(products);
function Shop({ cart, setCart }) {
  const [isActive, setIsActive] = useState(false);

  const [items, setItems] = useState();
  function handleCart(event) {
    setCart(cart + 1);
    setIsActive((current) => !current);
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = "Added to Cart";
    event.currentTarget.style.color = "#666666";
  }

  // got this from stackoverflow - compares all the values of a property, sorts the lowest ones to the top and highest ones to the bottom of the list
  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  }

  // sort the products by price lowest to highest
  function sortProducts() {
    setItems([...products], products.sort(sortByProperty("price")));
    console.log(products);
  }
  // sort the products by price highest to lowest
  function sortProductsReverse() {
    setItems([...products], products.sort(sortByProperty("price")).reverse());
    console.log(products);
  }

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
      <Button variant="contained" onClick={sortProducts}>
        Click me!
      </Button>
      <Button variant="contained" onClick={sortProductsReverse}>
        Click me!
      </Button>
    </Grid>
  );
}

export default Shop;
