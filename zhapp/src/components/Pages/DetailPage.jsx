import React from 'react';
import { useParams } from 'react-router';
import ItemDetailContainer from '../Items/ItemDetailContainer';

const DetailPage = ({items}) => {
  let {id} = useParams();
  let idN = parseInt(id)
  
  return (
    <>
      <ItemDetailContainer id={idN} items={items}/>
    </>
  );
}

export default DetailPage;
