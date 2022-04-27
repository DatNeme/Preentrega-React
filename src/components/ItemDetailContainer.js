import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { fsFetchOne } from "../fsFetch";

const ItemDetailContainer = () => {
    const [comic, setComic] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        fsFetchOne(idProduct)
            .then(result => setComic(result))
            .catch(err => console.log(err))
    }, [idProduct]);
    
    return (
        <ItemDetail item={comic} />
    );
}

export default ItemDetailContainer;