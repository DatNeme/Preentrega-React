import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import React from 'react';

const ItemDetail = ({ item }) => {

    const onAdd = (count) => {
        alert("Has seleccionado " + count + " items.");
    }

    return (
        <>
        {
            item && item.image
            ?
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image.url} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.description}</Desc>
                        <Price> {item.price}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;