import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
import '../App.css'
import { fsFetch } from "../fsFetch";


const ItemListContainer = () => {
  const [comics, setComics] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    fsFetch(idCategory)
      .then(result => setComics(result))
      .catch(err => console.log(err));
  }, [idCategory]);

  useEffect(() => {
    return (() => {
        setComics([]);
    })
}, []);


  return (
    <>
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
