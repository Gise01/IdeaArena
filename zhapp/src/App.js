import React, { useState, useEffect }from 'react';
import axios from 'axios';
import NavBar from '../src/components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailPage from './components/Pages/DetailPage';
import Home from './components/Pages/Home';
import CategoryPage from './components/Pages/CategoryPage';
import ItemsPage from './components/Pages/ItemsPage';

function App() {
  const [items, setitems] = useState([]);
  
  const showItems = async () => {
    try {
      const res = await axios.get("/products.json");
      setitems(res.data);
    } catch (error) {
      console.log(error);
    }  
  }
  useEffect(()=>{ 
    setTimeout(showItems, 2000);
  }, []);
 
  const [qBuy, setqBuy] = useState(0);
  const addCart = (qty) => {
    setqBuy (qBuy+qty)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar qBuy={qBuy}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/productos">
              <ItemsPage items={items} addCart={addCart}/>
            </Route>
            <Route exact path="/categorias/:categorias">
              <CategoryPage addCart={addCart} items={items} />
            </Route>
            <Route exact path="/productos/:id">
              <div>Entobces</div>
              <DetailPage items={items}/>
            </Route>
            <Route exact path="/cotizador">
              <div>
                ESTO ES EL COTIZADOR
              </div>
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
