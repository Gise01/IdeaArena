import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';


const ItemList = ({addCart, items}) => {
  const [itemId, setitemId] = useState(0);

  const getId = (id) => {
    setitemId(id)
  };


  return (
    <>
      {itemId === 0
      ? 
      <Row xs={1} md={4} className="g-4">
        {items.map((item=> ( <Item key={item.id} item={item} addCart={addCart} getId={getId} itemId={itemId}/>))) }
        
      </Row>
      :
      <ItemDetailContainer items={items} itemId={itemId} />
      }
    </>
  )
}

export default ItemList
