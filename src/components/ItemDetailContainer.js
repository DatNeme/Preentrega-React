import { useEffect, useState } from "react";
import {customFetch} from "./customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const {data} = require('../data') 

const ItemDetailContainer = () => {
    const [comic, setComic] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        customFetch(1000, data.find(item => item.id === parseInt(idProduct)))
            .then(result => setComic(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={comic} />
    );
}

export default ItemDetailContainer;