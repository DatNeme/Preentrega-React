import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
import '../App.css'
import { collection, doc, getDocs } from "firebase/firestore";
import db from '../firebaseConfig';



const ItemListContainer = () => {
  const [comics, setComics] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const fetchFS = async() => {    
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFS = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return dataFS;
    }
    fetchFS()
      .then(result => setComics(result))
      .catch(err => console.log(err));
}, [comics]);


  return (
    <>
      <div className="container w-50">
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
