import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import CartContextProvider from "./components/CartContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/product/:idProduct" element={<ItemDetailContainer/>}  />
        <Route path="/cart" element={<Cart/>} />
      </Routes>     
      </BrowserRouter>
     </CartContextProvider>
    </>
  );
};

export default App;
