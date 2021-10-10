import React from 'react';
import ItemsListContainer from '../Items/ItemsListContainer';

const ItemsPage = ({items, addCart}) => {
  return (
    <>
      <ItemsListContainer items={items} greeting="productos" addCart={addCart}/>
    </>
  );
}

export default ItemsPage;
