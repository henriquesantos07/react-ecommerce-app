import NavBar from "./components/Navbar/NavBar";
import ItemList from "./components/ItemList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Promocao from "./pages/Promocao"
import Homem from "./pages/Homem";
import ItemDetailContainer from "./components/ItemDetailContainer";




function App() {
 return (
  <>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemList />} />
          <Route exact path="/homem" element={<Homem />} />
          <Route exact path="/mulher" element={<ItemDetailContainer />} />
          <Route exact path="promocao" element={<Promocao />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
 );
}


export default App;