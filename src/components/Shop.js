import React, { useState } from "react";
import products from "../data/products.json";

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
      {products.map((product) => (
        <div style={{ marginTop: "100px" }}>{JSON.stringify(product)}</div>
      ))}
    </div>
  );
}

export default Shop;
