import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import Loader from "react-loader-spinner";


const ItemList = ({addCart}) => {
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
  
  useEffect(()=>{
    showItems();
    setTimeout( setloading(false), 3000 )   
  }, [])
  
  return (
    <>
      {loading 
      ? 
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        /> 
      : 
      <Item addCart={addCart} items={items}/>}
      
    </>
  );
}

export default ItemList;
