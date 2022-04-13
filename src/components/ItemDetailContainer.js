import { useEffect, useState } from "react";
import {customFetch} from "./customFetch";
import ItemDetail from "./ItemDetail";
const {data} = require('../data') 

const ItemDetailContainer = () => {
    const [comic, setComic] = useState({});

    useEffect(() => {
        customFetch(2000, data[1])
            .then(result => setComic(result))
            .catch(error => console.log(error))
    }, []);
    
    return (
        <ItemDetail item={comic} />
    );
}

export default ItemDetailContainer;