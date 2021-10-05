import React from 'react';
import Layout from '../Layout/Layout';
import ItemList from './Item';
import './ItemsListContainer.css';

const ItemsListContainer = ({greeting, addCart, qBuy}) => {
  return (
    <Layout qBuy={qBuy}>
      <h3>Estos son nuestros {greeting}</h3>
      <ItemList addCart={addCart}/>
    </Layout>

  );
}

export default ItemsListContainer;