import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<ItemListContainer/>}  />
       <Route path="/category/:idCategory" element={<ItemListContainer/>} />
       <Route path="/product/:idProduct" element={<ItemDetailContainer/>}  />
     </Routes>     
     </BrowserRouter>
    </>
  );
};

export default App;
