import React from 'react';
import Item from './Item';

const ItemList = ({addCart}) => {
  async function showItems () {
    const response = await fetch('../Assets/products.json');
    const items = await response.json();
    console.log(items);
    return items;
  }
  showItems()
  useEffect(()=>{
    showItems.then((resp)=>console.log(resp))
    })

  return (
    <div className="especial">
      <Item addCart={addCart}/>

      sale esto??
    </div>
  );
}

export default ItemList;
