import NavBar from "./components/Navbar/NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Promocao from "./pages/Promocao"
import Homem from "./pages/Homem";
import ItemDetailContainer from "./components/ItemsContainer/ItemDetailContainer";
import Home from "./pages/Home";




function App() {
 return (
  <>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/homem" element={<Homem />} />
          <Route exact path="/homem/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
 );
}


export default App;