import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemsContainer/ItemDetailContainer";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemsContainer/ItemListContainer";
import CartContext from "./contexto/cartContext";




function App() {
 return (
  <>
    <BrowserRouter>
      <CartContext.Provider value={[]}>
        <div className="App">
          
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/homem" element={<ItemListContainer />} />
            <Route exact path="/produtos/:productId" element={<ItemDetailContainer />} />
          </Routes>
          
          </div>
      </CartContext.Provider>
    </BrowserRouter>
  </>
 );
}


export default App;