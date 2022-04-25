import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const cont = useContext(CartContext);

    
    return(
        <Badge badgeContent={cont.ItmCount()} color="error">
        <ShoppingCartOutlined />
        </Badge>
    )
}



export default CartWidget;