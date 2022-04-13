import Item from "./Item";
import React from "react";
import { ProductsContainer } from "./styledComponents";

export default function ItemList({ product }) {
  return (
    <>
      <ProductsContainer>
        {product.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </ProductsContainer>
    </>
  );
}
