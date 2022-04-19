import { useState, useEffect } from "react";
import { ProductAmount, ProductAmountContainer } from "./styledComponents";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

useEffect(() =>{
    setCount(initial);
},[]);

const up = () => {
    if (count < stock) {
        setCount(count + 1);
    }
}

const down = () => {
    if (count > initial+1) {
        setCount(count - 1);
    }
}

return (
    <ProductAmountContainer>
        <button type="button" className="btn btn-dark" onClick={down}>-</button>
        <ProductAmount>{count}</ProductAmount>
        <button type="button" className="btn btn-dark" onClick={up}>+</button>
        {
            stock && count
            ? <button type="button" className="btn btn-success" onClick={() => onAdd(count)}>Añadir al carrito</button>
            : <button type="button" className="btn btn-secondary" disabled>Añadir al carrito</button>
        }
        
    </ProductAmountContainer>
);


}
export default ItemCount;