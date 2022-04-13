import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ProductContainer, Wrapper } from "./styledComponents";

export default function Item({ id, title, price, image, stock }) {
  return (
    <>
      <Wrapper>
          <div className="card cWidth" key={id}>
            <img src={image.url} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {price}
              </p>
              <p className="card-text">
               Unidades en stock: {stock}
              </p>
            </div>
          </div>
    </Wrapper>
    </>  
  );
}
