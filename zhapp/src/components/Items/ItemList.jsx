import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import Item from './Item';


const ItemList = ({items, categorias}) => {
   
  const [itemsCat, setitemsCat] = useState ([]);
  
  useEffect(() => {
    setitemsCat(items.filter (item => item.type === categorias))
  }, [categorias])
  
  return (
    <>
      { itemsCat.length === 0
      ?
      <Row xs={1} md={4} className="g-4">
        {items.map((item=> ( <Item key={item.id} item={item}/>))) }
      </Row>
      :
      <Row xs={1} md={4} className="g-4">
        {itemsCat.map((item=> ( <Item key={item.id} item={item}/>))) }
      </Row>
      } 
    </>
  )
}

export default ItemList
