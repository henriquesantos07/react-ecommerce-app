import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemsContainer/ItemDetailContainer";
import Home from "./pages/Home";
import Homem from './pages/Homem';
import CartProvider from "./contexto/CartProvider";
import Cart from './components/ItemsContainer/Cart';
import Mulher from "./pages/Mulher";
import Promocao from './pages/Promocao';
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import Checkout from "./components/ItemsContainer/Checkout";





function App() {
 return (
  <>
    <BrowserRouter>
      <CartProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/homem" element={<Homem />} />
              <Route exact path="/mulher" element={<Mulher />} />
              <Route exact path="/promos" element={<Promocao />} />
              <Route exact path="/produtos/:productId" element={<ItemDetailContainer />} />
              <Route exact path="/carrinho" element={<Cart />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            </div>   
      </CartProvider>
    </BrowserRouter>
  </>
 );
}


export default App;