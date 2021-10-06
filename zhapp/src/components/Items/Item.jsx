import React from 'react';
import { Row } from 'react-bootstrap';
import Cards from '../Assets/Cards';


const Item = ({addCart, items}) => {
  
  return (
    <Row xs={1} md={3} className="g-4">
      {items.map((item=> ( <Cards key={item.id} item={item} addCart={addCart} />))) }
    </Row>
  )
}

export default Item
