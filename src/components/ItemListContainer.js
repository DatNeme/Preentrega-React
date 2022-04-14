import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router';
import { customFetch } from "./customFetch";
const {data} = require('../data') 

const ItemListContainer = () => {
  const [comics, setComics] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    customFetch(2000, data.filter(product => {
        if (idCategory === undefined) return product;
        return product.categoryId === parseInt(idCategory)
    }))
        .then(result => setComics(result))
        .catch(err => console.log(err))
}, [comics]);

const onAdd = (qty) => {
  alert("You have selected " + qty + " items.");
}

  return (
    <>
      <div>
        <h1>Catálogo de productos</h1>
      </div>
      <div>
        <div className="container">
          <div className="row justify-content-around">
            <div>
              <ItemList product={comics} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
