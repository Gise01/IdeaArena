import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ItemDetail from './ItemDetail';
import Loader from "react-loader-spinner";

const ItemDetailContainer = ({items, addCart}) => {
  const [itemIdFind, setitemIdFind] = useState(null);

  let {id} = useParams();
  let idN = parseInt(id)
   
  const getItem = () => {
    setitemIdFind(items.find((item) => item.id === idN))
  };


  useEffect(() => {
    setTimeout(getItem, 2000)
  }, [])
  
  
  return (
    <>
      {itemIdFind  
      ? 
      <ItemDetail itemIdFind={itemIdFind} addCart={addCart}/>
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

export default ItemDetailContainer;
