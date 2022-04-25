import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { useState, useContext } from 'react';
import ChkButton from './ChkButton';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const Ctx = useContext(CartContext);

    const onAdd = (count) => {
        alert("Has seleccionado " + count + " items.");
        setItemCount(count);
        Ctx.addItem(item, count);
    }

    return (
        <>
        {
            item && item.image
            ?
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.description}</Desc>
                        <Price> ${item.price}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to={"/cart"}><ChkButton/></Link> 
                       
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;