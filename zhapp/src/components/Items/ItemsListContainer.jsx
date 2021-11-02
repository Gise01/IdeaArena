import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import ItemList from './ItemList';
import './ItemsListContainer.css';
import Loader from "react-loader-spinner";
import { getFirestore } from '../Services/getFirebase';

const ItemsListContainer = ({greeting}) => {
  const [loading, setloading] = useState(false);
  const [items, setitems] = useState([])
  const changeLoad = () => setloading(true);
  let {categorias} = useParams();
  const db = getFirestore();

  const showItems = async () => {
    if (categorias) {
      try {
        const res = await db.collection('items').where('category', '==', categorias).get();
        setitems(res.docs.map(item => ({id: item.id, ...item.data()})));
      } catch (error) {
        console.log(error);
      }  
    } else {
      try {
        const res = await db.collection('items').orderBy('category', 'desc').get();
        setitems(res.docs.map(item => ({id: item.id, ...item.data()})));
      } catch (error) {
        console.log(error);
      }  
    }
    setTimeout(changeLoad, 2000)
  }

  useEffect(()=>{
    setloading(false);
    showItems();
  }, [categorias]);
 
  return (
    <>
      <h3>Estos son nuestros {greeting}</h3>
      {loading 
      ? 
      <ItemList items={items} />
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