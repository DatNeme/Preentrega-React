import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {WrapperCart,TitleCart,ContentCart,Product,ProductDetail,ImageCart,Details,PriceDetail,ProductAmountContainer,ProductAmount,ProductPrice,Top,TopText} from "./styledComponents";
import { Button } from "@mui/material";
import { DeleteForever, ArrowCircleLeftOutlined, BackspaceOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../firebaseConfig';
import Swal from 'sweetalert2';

const Cart = () => {
  const Ctx = useContext(CartContext);
  
  const CheckoutOrderFs = () => {
    let order = {
      buyer: {
        name: "El bicho",
        phone: "1234567890",
        email:"siuuuu@gmail.com"
      },
      items: Ctx.cartList.map(item => ({
        id: item.idItem,
        title: item.titleItem,
        price: item.priceItem,
        qty: item.countItem
      })),
      date: serverTimestamp(),
      total: Ctx.cartTotal(),
    }

    Ctx.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.countItem)
      });
    });

    const addOrder = async () => {
      const orderId = doc(collection(db, "orders"));
      await setDoc(orderId, order);
      return orderId;
    }

    addOrder()
      .then(result => Swal.fire({
        text:'Su orden con el ID ' + result.id + ' ha sido creada satisfactoriamente',
        title:'Exito!',
        icon:'success',
        toast:'true',
        position:'top',}))
      .catch(err => console.log(err));
  
    Ctx.clear();
  
  }

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
                  <ProductAmount>{item.countItem} unidad(es) a</ProductAmount>
                  <ProductAmount>{item.priceItem} c/u</ProductAmount>
                </ProductAmountContainer>
                <ProductPrice>Total: ${Ctx.ItmTotal(item.idItem)}</ProductPrice>
              </PriceDetail>
            </Product>
            
          ))}
          <PriceDetail>
          <ProductAmountContainer>
          <ProductAmount>Total de la compra: ${Ctx.cartTotal()}</ProductAmount>
          <ProductAmount><Button variant="contained" color="success" onClick={CheckoutOrderFs}>Finalizar Compra</Button></ProductAmount>
          </ProductAmountContainer>
          </PriceDetail>
        </ContentCart>
      )}
    </WrapperCart>
  );
};

export default Cart;
