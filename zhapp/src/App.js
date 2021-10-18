import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../src/components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/Items/ItemsListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

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
 
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/">
              <ItemsListContainer items={items} greeting="productos" />
              </Route>
              <Route exact path="/categorias/:categorias">
                <ItemsListContainer items={items} greeting="productos segun categoria"/>
              </Route>
              <Route exact path="/productos/:id">
                <ItemDetailContainer items={items} />
              </Route>
              <Route exact path="/cotizador">
                <div>
                  ESTO ES EL COTIZADOR
                </div>
              </Route>
              <Route exact path="/contacto">
                <div>
                  ESTO ES EL FORMULARIO DE CONTACTO
                </div>
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          <Footer />
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
