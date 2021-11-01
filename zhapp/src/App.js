import React from 'react';
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
   
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/">
              <ItemsListContainer greeting="productos" />
              </Route>
              <Route exact path="/categorias/:categorias">
                <ItemsListContainer greeting="productos segun categoria"/>
              </Route>
              <Route exact path="/productos/:id">
                <ItemDetailContainer />
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
