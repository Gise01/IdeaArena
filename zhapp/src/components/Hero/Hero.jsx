import React, { useState }from 'react';
import NavBar from '../NavBar/NavBar';
import ItemsListContainer from '../Items/ItemsListContainer';

const Hero = () => {
  const [qBuy, setqBuy] = useState(0);
  const addCart = (qty) => {
    setqBuy (qBuy+qty)
    alert("Agregado al carrito")
    console.log(qBuy);

  }

  return (
    <div>
      <NavBar qBuy={qBuy}/>
      <ItemsListContainer greeting = "productos destacados" addCart={addCart}/>
    </div>
  );
}

export default Hero;
