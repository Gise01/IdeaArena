import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemsListContainer.css';
import Loader from "react-loader-spinner";

const ItemsListContainer = ({greeting, addCart, items}) => {
  const [loading, setloading] = useState(false);
  
  const changeLoad = () => setloading(true);

  useEffect(()=>{ 
    setTimeout(changeLoad, 2000);
  }, []);
  
  return (
    <>
      <h3>Estos son nuestros {greeting}</h3>
      {loading 
      ? 
      <ItemList addCart={addCart} items={items}/>
      : 
      <>
        <Loader
        type="Puff"
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={5000}
        />
        <div><h4 color="white">Cargando...</h4></div> 
      </>
      }
    </>

  );
}

export default ItemsListContainer;