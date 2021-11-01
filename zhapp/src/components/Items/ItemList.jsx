import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import Item from './Item';


const ItemList = ({items}) => {
   
  return (
      <Row xs={1} md={4} className="g-4">
        {items.map((item=> ( <Item key={item.id} item={item}/>))) }
      </Row>
  )
}

export default ItemList
