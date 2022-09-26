import Navbar from "./Components/Navbar/Navbar";
import './Components/Navbar/Navbar.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return (
  <div>
     <Navbar />   
    <main>
      <ItemListContainer />
    </main>
    </div>
  );
}

export default App;
