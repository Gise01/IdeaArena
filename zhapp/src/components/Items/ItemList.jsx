import React from 'react';
import Item from './Item';

const ItemList = ({addCart}) => {
  async function showItems () {

  }
  return (
    <div>
      <Item addCart={addCart}/>
    </div>
  );
}

export default ItemList;
