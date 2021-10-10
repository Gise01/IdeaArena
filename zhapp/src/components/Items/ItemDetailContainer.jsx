import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from "react-loader-spinner";

const ItemDetailContainer = ({items, id}) => {
  const [itemIdFind, setitemIdFind] = useState(null);
   
  const getItem = () => {
    setitemIdFind(items.find((item) => item.id == id))
  };


  useEffect(() => {
    setTimeout(getItem, 2000)
  }, [])
  
  
  return (
    <>
      {itemIdFind  
      ? 
      <ItemDetail itemIdFind={itemIdFind}/>
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
