import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ItemDetail from './ItemDetail';
import Loader from "react-loader-spinner";
import { getFirestore } from '../Services/getFirebase';

const ItemDetailContainer = ({addCart}) => {
  const [itemIdFind, setitemIdFind] = useState(false);
  const [itemId, setItemId] = useState({})
  let {id} = useParams();
  const db = getFirestore();
  
  console.log(id);
  const getItem = async() => {
    try {
      const res = await db.collection('items').doc(id).get();
      setItemId({id: res.id, ...res.data()});
    } catch (error) {
      console.log(error);
    }  
    setitemIdFind(true)
  };
  
  useEffect(() => {
    setitemIdFind(false);
    getItem();
  }, [id])
  
  
  return (
    <>
      {itemIdFind  
      ? 
      <ItemDetail itemId={itemId} addCart={addCart}/>
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
