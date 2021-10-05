import React from 'react';
import ItemList from './Item';
import './ItemsListContainer.css';

const ItemsListContainer = ({greeting, addCart}) => {
  return (
    <div>
      <h3>Estos son nuestros {greeting}</h3>
      <ItemList addCart={addCart}/>
    </div>
  );
}

export default ItemsListContainer;