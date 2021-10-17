import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../src/components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/Items/ItemsListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

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
            <ItemsListContainer items={items} greeting="productos" addCart={addCart}/>
            </Route>
            <Route exact path="/categorias/:categorias">
              <ItemsListContainer addCart={addCart} items={items} greeting="productos segun categoria"/>
            </Route>
            <Route exact path="/productos/:id">
              <ItemDetailContainer items={items} addCart={addCart}/>
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
              <div>
                ESTO ES EL CARRITO
              </div>
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
