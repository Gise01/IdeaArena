import React, { useState }from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsListContainer from './components/Items/ItemsListContainer';



function App() {
  const [qBuy, setqBuy] = useState(0);
  const addCart = (qty) => {
    setqBuy (qBuy+qty)
  }

  return (
    <div className="App">
      <ItemsListContainer greeting = "productos destacados" addCart={addCart} qBuy={qBuy}/>
    </div>
  );
}

export default App;
