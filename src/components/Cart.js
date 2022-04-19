import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {WrapperCart,TitleCart,ContentCart,Product,ProductDetail,ImageCart,Details,PriceDetail,ProductAmountContainer,ProductAmount,ProductPrice,Top,TopText} from "./styledComponents";
import { Button } from "@mui/material";
import { DeleteForever, ArrowCircleLeftOutlined, BackspaceOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Cart = () => {
  const Ctx = useContext(CartContext);

  return (
    <WrapperCart>
      <TitleCart>Carrito de compras</TitleCart>
      <Top>
        <Link to='/'> <Button variant="contained" startIcon={<ArrowCircleLeftOutlined />}>Continuar comprando</Button> </Link>
        {
          (Ctx.cartList.length > 0)
        ? <Button variant="contained" color="warning" startIcon={<DeleteForever />} onClick={Ctx.clear}>
              Limpiar el carrito
          </Button>
        : <TopText>El carrito se encuentra vacío</TopText>
        }
      </Top>
      {Ctx.cartList.length > 0 && (
        <ContentCart>
          {Ctx.cartList.map((item) => (
            <Product key={item.idItem}>
              <ProductDetail>
                <ImageCart src={item.imgItem} />
                <Details>
                  <span>
                    <b>Producto:</b> {item.titleItem}
                  </span>
                  <span>
                  <Button variant="contained" color="error" startIcon={<BackspaceOutlined />} onClick={() => Ctx.deleteItem(item.idItem)} >Eliminar item</Button>
                  </span>                  
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <ProductAmount>{item.countItem} unidad(es) </ProductAmount>
                </ProductAmountContainer>
                <ProductPrice>{item.priceItem} c/u</ProductPrice>
              </PriceDetail>
            </Product>
          ))}
        </ContentCart>
      )}
    </WrapperCart>
  );
};

export default Cart;
