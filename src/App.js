import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import Spinner from "./components/Spinner";



function App() {
 return (
   <div className="App">
     <NavBar />
     <ItemListContainer />
     <ItemCount stock="5" initial="1"/> 
     <ItemList />
     
   </div>
 );
}


export default App;