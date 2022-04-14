import Item from "./Item";
import React from "react";
import { ProductsContainer } from "./styledComponents";

const ItemList = ({ product }) => {
  return (
      <ProductsContainer>
      {
          product.length > 0
          ? product.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} image={item.image[0]} stock={item.stock} />)
          : <p>Cargando...</p>
      }
      </ProductsContainer>
  );
}

export default ItemList;
