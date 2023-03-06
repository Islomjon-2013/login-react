import React from "react";
import { Button } from "@mui/material";
import "../price/price.css";
const Price = () => {
  return (
    <div className="price">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="btn__group">
              <div className="btn__group">
                <Button variant="outlined">For name:</Button>
                <Button variant="outlined">Log Out</Button>
              </div>
            </div>

            <div className="card__box">
              <h2> Product id:</h2>
              <h2>Product name:</h2>
              <h2>Product price:</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
