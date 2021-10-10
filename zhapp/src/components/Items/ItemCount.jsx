import React, { useState } from 'react';
import {  ButtonGroup, Button } from 'react-bootstrap';
import { BagDash, BagPlus } from 'react-bootstrap-icons';

const ItemCount = ({onAdd, stock}) => {
  let initial = 0
  if (stock>0) {initial = 1};
  
  const [qAdd, setqAdd] = useState(initial);
  const remove = () => {
    if (qAdd > 1) {
      setqAdd(qAdd-1)
    }
  };
  const add = () => {
    if (qAdd < stock) {
      setqAdd (qAdd+1)
    }
  }
  return (
    <ButtonGroup size="sm">
      <Button variant="secondary" onClick={() => remove()} disabled= {qAdd===1||qAdd===0?true:null}> <BagDash size={18} /> </Button>
      <Button variant="secondary" onClick={() => onAdd(qAdd)} disabled= {qAdd===0?true:null}>Add {qAdd}</Button>
      <Button variant="secondary" onClick={() => add()} disabled= {qAdd===stock?true:null}> <BagPlus size={18} /> </Button>
    </ButtonGroup>
  )
}

export default ItemCount
