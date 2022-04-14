import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
import { customFetch } from "./customFetch";
import '../App.css'
const {data} = require('../data') 

const ItemListContainer = () => {
  const [comics, setComics] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    customFetch(1000, data.filter(product => {
        if (idCategory === undefined) return product;
        return product.categoryId === parseInt(idCategory)
    }))
        .then(result => setComics(result))
        .catch(err => console.log(err))
}, [comics]);


  return (
    <>
      <div className="container w-100">
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
