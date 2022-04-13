import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <div id="main">
          <main>
            <div>
              <ItemDetailContainer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
