import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemsContainer/ItemDetailContainer";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemsContainer/ItemListContainer";
import CartProvider from "./contexto/CartProvider";
import Cart from './components/ItemsContainer/Cart'
import Mulher from "./pages/Mulher"
import Promocao from './pages/Promocao'




function App() {
 return (
  <>
    <BrowserRouter>
      <CartProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/homem" element={<ItemListContainer />} />
              <Route exact path="/mulher" element={<Mulher />} />
              <Route exact path="/promos" element={<Promocao />} />
              <Route exact path="/produtos/:productId" element={<ItemDetailContainer />} />
              <Route exact path="/carrinho" element={<Cart />} />
            </Routes>
            </div>
      </CartProvider>
    </BrowserRouter>
  </>
 );
}


export default App;