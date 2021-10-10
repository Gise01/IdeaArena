import React from 'react';
import { Row } from 'react-bootstrap';
import Item from './Item';


const ItemList = ({addCart, items}) => {
  
  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {items.map((item=> ( <Item key={item.id} item={item} addCart={addCart}/>))) }
        
      </Row>
    </>
  )
}

export default ItemList
