import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);
    const addItem = (item, count) => {
        let active = cartList.find(product => product.idItem === item.id);
        if (active === undefined){
            
            setCartList([...cartList, 
            {
                idItem: item.id,
                imgItem: item.image[0],
                titleItem: item.title,
                priceItem: item.price,
                countItem: count
            }
            ]);
        } else {
            active.countItem += count;
        }
    }

    const clear = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const ItmCount = () => {
        let cts = cartList.map(item => item.countItem);
        return cts.reduce(((ant, act) => ant + act), 0);
    }

    const ItmTotal = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].countItem;
    }

    const cartTotal = () => {
        let ItmAmount = cartList.map(item => ItmTotal(item.idItem));
        return ItmAmount.reduce((ant, act) => ant + act );
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, deleteItem, ItmCount, ItmTotal, cartTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;