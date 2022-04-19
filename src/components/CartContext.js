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

    return (
        <CartContext.Provider value={{cartList, addItem, clear, deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;