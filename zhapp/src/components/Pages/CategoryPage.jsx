import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemsListContainer from '../Items/ItemsListContainer';

const CategoryPage = ({items, addCart}) => {
  let {categorias} = useParams();
  console.log(categorias);
  
  const [itemsCat, setitemsCat] = useState ([]);
  
  useEffect(() => {
    setitemsCat(items.filter (item => item.type === categorias))
  }, [categorias])

  return (
    <>
      <ItemsListContainer items={itemsCat} greeting={`productos de ${categorias}`} addCart={addCart} />
    </>
  );
}

export default CategoryPage;
