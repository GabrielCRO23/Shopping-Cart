import React, { useState } from "react";
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

function Shop({ cart, setCart, price, setPrice }) {
  const [isActive, setIsActive] = useState(false);

  const [items, setItems] = useState(products);
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

              margin: "2rem",
            }}
          >
            <Typography sx={{ fontWeight: "700", textAlign: "center" }}>
              Cart
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "1rem",
              }}
            >
              {cart}
            </Typography>
            <Divider orientation="vertical" color="white" flexItem></Divider>
            <Typography sx={{ marginLeft: "1rem" }}>
              ${price.toFixed(2)}
            </Typography>
          </Box>
          <Divider color="white" />
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
