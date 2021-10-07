import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from "react-loader-spinner";

const ItemDetailContainer = ({items, itemId}) => {
  const [itemIdFind, setitemIdFind] = useState(0);
  
  const getItem = () => {
    const itemFind = items.find(item =>item.id === itemId)
    setitemIdFind(itemFind)
  };

  useEffect(() => {
    setTimeout(getItem(), 6000)
  }, [])
  
  console.log(itemIdFind);

  return (
    <>
      {itemIdFind === 0 
      ? 
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} 
      /> 
      : 
      <ItemDetail itemIdFind={itemIdFind}/>}
    </>
  );
}

export default ItemDetailContainer;
