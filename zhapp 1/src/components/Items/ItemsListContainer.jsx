import React from 'react';
import Item from './Item';
import './ItemsListContainer.css';

const ItemsListContainer = ({greeting}) => {
  
  return (
    <div>
      <h3>Estos son nuestros {greeting}</h3>
      <Item />
    </div>
  );
}

export default ItemsListContainer;