import React from "react";
import { Button } from "@mui/material";
import "../product/product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="btn-group">
          <Button variant="contained">Log out</Button>
          <Button variant="contained">For name:</Button>
        </div>
        <div className="row box__product">
          <div className="col-8 offset-2">
            <h3 className="title">Product Name</h3>
            <input type="text" className="form-control mb-3 p-3" />
            <h3 className="title">Product price</h3>
            <input type="text" className="form-control mb-3 p-3" />
            <button className="btn btn-success">Send</button>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <table class="table mt-5">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                  <th scope="col">See</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>orange</td>
                  <td>$20</td>
                  <td>
                    <button className="btn btn-warning mx-2">edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger mx-2">delete</button>
                  </td>
                  <td>
                    <button className="btn btn-secondary mx-2">see</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// https://api.alicoder.uz/api/products

// {
// "name":"Olma",
// "price":"10000"
// }
