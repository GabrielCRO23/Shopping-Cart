import React, { useState, useEffect } from "react";
import ProductsList from "../data/ProductsList";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import Box from "@mui/material/Box";
import ShoppingCart from "./ShoppingCart";
import MobileShoppingCart from "./MobileShoppingCart";

function Shop({
  models,
  setModels,
  cart,
  setCart,
  price,
  setPrice,
  toggle,
  setToggle,
  animation,
  setAnimation,
}) {
  const [items, setItems] = useState(ProductsList); //setItems is for sorting the products based on price. This state is passed to drawers.

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
          {ProductsList.map((product, index) => (
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
