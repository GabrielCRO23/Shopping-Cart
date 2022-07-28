import React, { useState, useEffect } from "react";
import products from "../data/products.json";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Product from "./Product";
import Drawer from "@mui/material/Drawer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Shop({ cart, setCart, price, setPrice }) {
  let [animation, setAnimation] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState(products);
  const [models, setModels] = useState([]);

  //setCart is for managing the number in the cart items, setAnimation is for setting animation to "0", when it is set to "1" the fade animation will play.
  //The events are for the button effects after clicking the buttons

  function handleCart(event) {
    setCart(cart + 1);

    setAnimation(0);
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = "Added to Cart";
    event.currentTarget.style.color = "#666666";
    event.currentTarget.style.cursor = "default";
  }

  useEffect(() => {
    setAnimation(1);
  }, [cart]);

  //takes the index of the quantity value in "models" and adds 1 to it. Also sets cart and price state accordingly.

  function addQuantity(index) {
    const values = [...models];
    values[index].quantity += 1;
    setModels(values);
    setCart(cart + 1);
    setPrice(price + values[index].price + 0.99);
  }
  // takes the index of the quantity value in "models" and removes 1 to it as long as it's greater than 1. Also sets cart and price state accordingly.
  function removeQuantity(index) {
    const values = [...models];
    if (values[index].quantity > 1) {
      values[index].quantity -= 1;
      setModels(values);
      setCart(cart - 1);
      setPrice(price - values[index].price - 0.99);
    }
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
        <Drawer
          sx={{
            zIndex: 0,
            position: "relative",
            width: "20%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              backgroundColor: "black",
              color: "white",
              width: "20%",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography
            align="center"
            sx={{ marginTop: "5rem", fontWeight: "700" }}
          >
            Sort By Price:
          </Typography>
          <Button onClick={sortProducts}>Lowest to Highest</Button>
          <Button onClick={sortProductsReverse}>Highest to Lowest</Button>
          <Divider color="white" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Typography sx={{ fontWeight: "700", textAlign: "center" }}>
              Cart
            </Typography>
            <Typography
              className={"drawer-cart"}
              animation={animation}
              sx={{
                display: "flex",

                fontWeight: "700",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              {cart}
            </Typography>
            <Divider
              className={"drawer-cart"}
              animation={animation}
              orientation="vertical"
              color="white"
              flexItem
            ></Divider>
            <Typography
              className={"drawer-cart"}
              animation={animation}
              sx={{ marginLeft: "1rem" }}
            >
              ${price.toFixed(2)}
            </Typography>
          </Box>
          <Divider color="white" />
          {models.map((model, index) => (
            <React.Fragment key={index}>
              <li>
                {model.model}
                <Button
                  onClick={(event) => addQuantity(index)}
                  sx={{ color: "#fff" }}
                  startIcon={<AddIcon />}
                ></Button>
                <Button
                  onClick={(event) => removeQuantity(index)}
                  sx={{ color: "#fff" }}
                  startIcon={<RemoveIcon />}
                ></Button>
                Quantity: {model.quantity}
              </li>
            </React.Fragment>
          ))}
        </Drawer>

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
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <Grid key={product.id} item xs={12} sm={12} md={6} lg={4}>
                <Product {...product} />
                <button
                  style={{
                    display: "flex",
                    margin: "auto",
                  }}
                  className="cartButton"
                  onClick={(event) => {
                    handleCart(event);
                    setPrice(price + product.price + 0.99);
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
