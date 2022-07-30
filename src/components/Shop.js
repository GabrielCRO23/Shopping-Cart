import React, { useState, useEffect } from "react";
import products from "../data/products.json";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Product from "./Product";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ShoppingCart from "./ShoppingCart";

function Shop({ cart, setCart, price, setPrice }) {
  let [animation, setAnimation] = useState(0);

  const [items, setItems] = useState(products);
  const [models, setModels] = useState([]);

  //setCart is for managing the number in the cart items
  //setAnimation is for setting animation to "0", when it is set to "1" the fade animation will play.
  //The events are for the button effects after clicking the buttons

  function handleCart(event) {
    setCart(cart + 1);

    setAnimation(0);
    /*
    event.target.disabled = true;
    event.target.textContent = "Added to Cart";
    event.target.style.color = "#666666";
    event.target.style.cursor = "default";
    */

    //If the item is removed from cart, the button will be enabled again.
  }

  useEffect(() => {
    setAnimation(1);
  }, [cart]);

  //takes the index of the quantity value in "models" and adds 1 to it. Also sets cart and price state accordingly.

  function addQuantity(index) {
    setAnimation(0);
    const values = [...models];
    values[index].quantity += 1;
    setModels(values);
    setCart(cart + 1);
    setPrice(price + values[index].price);
  }
  // takes the index of the quantity value in "models" and removes 1 to it as long as it's greater than 1. Also sets cart and price state accordingly.
  function removeQuantity(index) {
    setAnimation(0);
    const values = [...models];
    if (values[index].quantity > 1) {
      values[index].quantity -= 1;
      setModels(values);
      setCart(cart - 1);
      setPrice(price - values[index].price);
    }
  }

  function removeCartItem(index) {
    setAnimation(0);
    const values = [...models];

    setCart(cart - 1 * values[index].quantity);
    setPrice(price - values[index].price * values[index].quantity);
    values[index].quantity = 0;
    values.splice(index, 1);

    setModels(values);
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
  }
  // sort the products by price highest to lowest
  function sortProductsReverse() {
    setItems([...products], products.sort(sortByProperty("price")).reverse());
  }

  //justifyContent: { md: "flex-end", xs: "center" },
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ShoppingCart
          animation={animation}
          setAnimation={setAnimation}
          cart={cart}
          setCart={setCart}
          price={price}
          setPrice={setPrice}
          models={models}
          setModels={setModels}
          items={items}
          setItems={setItems}
        />

        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
          container
        >
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <Grid key={product.id} item xs={12} sm={12} md={6} lg={4}>
                <Product {...product} />
                <button
                  disabled={models.some(
                    (models) => models.model === product.model && models.model
                  )}
                  style={{
                    display: "flex",
                    margin: "auto",
                  }}
                  className="cartButton"
                  name={product.model}
                  onClick={(event) => {
                    handleCart(event);
                    setPrice(price + product.price);

                    setModels([
                      ...models,
                      {
                        model: product.model,
                        price: product.price,
                        quantity: 1,
                      },
                    ]);
                  }}
                >
                  Add to Cart
                </button>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Shop;
