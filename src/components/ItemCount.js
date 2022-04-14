import { useState, useEffect } from "react";
import { ProductAmount, ProductAmountContainer } from "./styledComponents";

const ItemCount = ({stock = 5, initial = 0, onAdd}) => {
    const [count, setCount] = useState(1);


useEffect(() =>{
    setCount(initial);
},[]);

const up = () => {
    if (count < 5) {
        setCount(count + 1);
    }
}

const down = () => {
    if (count > initial) {
        setCount(count - 1);
    }
}

return (
    <ProductAmountContainer>
        <button type="button" className="btn btn-dark" onClick={down}>-</button>
        <ProductAmount>{count}</ProductAmount>
        <button type="button" className="btn btn-dark" onClick={up}>+</button>
        {
            stock
            ? <button type="button" className="btn btn-success" onClick={() => onAdd(count)}>Añadir al carrito</button>
            : <button type="button" className="btn btn-secondary" disabled>No hay stock</button>
        }
        
    </ProductAmountContainer>
);


}
export default ItemCount;