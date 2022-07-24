import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Product({ id, price, model, source }) {
  return (
    <div>
      <img
        style={{
          display: "flex",
          margin: "auto",
          height: "200px",
          width: "auto",
        }}
        src={source}
      ></img>
      <Typography align="center" color="white">
        {model}
      </Typography>
      <Typography align="center" color="white">
        ${price}.
        <span style={{ fontSize: "12px", verticalAlign: "3px" }}>99</span>
      </Typography>
    </div>
  );
}

export default Product;
