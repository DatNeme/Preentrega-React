import { useEffect, useState } from "react";
import { getData } from "../data";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function dataReq() {
      let dataIn = await getData();
      setComics(dataIn);
    }
    dataReq();
  }, []);

  return (
    <>
      <div>
        <h1>Catálogo de productos</h1>
      </div>
      <div>
        <div className="container-lg">
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
