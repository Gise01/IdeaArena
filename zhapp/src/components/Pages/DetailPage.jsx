import React from 'react';
import { useParams } from 'react-router';
import ItemDetailContainer from '../Items/ItemDetailContainer';

const DetailPage = ({items}) => {
  let {id} = useParams();

  return (
    <>
      <ItemDetailContainer id={id} items={items}/>
    </>
  );
}

export default DetailPage;
