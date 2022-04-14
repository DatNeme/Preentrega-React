import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from 'react-router-dom';
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

export default function Item({ id, title, price, image, stock }) {
  return (
    <>
      <ProductContainer>
      <Circle />
            <Image src={image} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>{price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/product/${id}`}><InfoOutlined />Details</Link>
                </Icon>
            </Info>
    </ProductContainer>
    </>  
  );
}
