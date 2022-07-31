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
import MobileShoppingCart from "./MobileShoppingCart";

function Shop({ cart, setCart, price, setPrice, toggle, setToggle }) {
  const [animation, setAnimation] = useState(0); //setAnimation is for setting animation to "0", when it is set to "1" the fade animation will play. This state is passed to drawers.
  const [items, setItems] = useState(products); //setItems is for sorting the products based on price. This state is passed to drawers.
  const [models, setModels] = useState([]); //setModels is for displaying selected items in the cart based on their product models from the JSON file. This is state is passed to the drawers.

  function handleCart(event) {
    setCart(cart + 1);
    setAnimation(0);
  }

  useEffect(() => {
    setAnimation(1);
  }, [cart]);

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

        <MobileShoppingCart
          toggle={toggle}
          setToggle={setToggle}
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
