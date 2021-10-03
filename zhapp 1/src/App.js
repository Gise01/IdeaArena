import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/Items/ItemsListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemsListContainer greeting = "productos destacados" />
    </div>
  );
}

export default App;
