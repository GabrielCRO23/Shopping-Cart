import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Product({ id, price, model, source }) {
  return (
    <div>
      <img style={{ height: "200px" }} src={source}></img>
      <Typography color="white">{model}</Typography>

      <Typography color="white">
        ${price}.
        <span style={{ fontSize: "12px", verticalAlign: "3px" }}>99</span>
      </Typography>
      <button className="cartButton">Add to Cart</button>
    </div>
  );
}

export default Product;
