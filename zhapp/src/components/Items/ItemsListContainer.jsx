import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import ItemList from './ItemList';
import axios from 'axios';
import './ItemsListContainer.css';
import Loader from "react-loader-spinner";

const ItemsListContainer = ({greeting, addCart, qBuy}) => {

  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(true)

  const showItems = async () => {
    try {
      const res = await axios.get("./products.json");
      const resArray = res.data;
      setitems(resArray);
      
    } catch (error) {
      console.log(error);
    }
    
  }
  /* useEffect(() => {
    setTimeout(setloading(false), 5000);
  }, []) */

  useEffect(()=>{ 
    setTimeout(setloading(false), 5000);
    showItems()
  }, [loading]);
  
  return (
    <Layout qBuy={qBuy}>
      <h3>Estos son nuestros {greeting}</h3>
      {loading 
      ? 
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000}
        /> 
      : 
        <ItemList addCart={addCart} items={items}/>
      }
    </Layout>

  );
}

export default ItemsListContainer;