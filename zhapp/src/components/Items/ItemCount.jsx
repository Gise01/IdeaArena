import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { BagDash, BagPlus } from 'react-bootstrap-icons';

const ItemCount = () => {
  let stock = 10
  const [qAdd, setqAdd] = useState(1);
  const remove = () => {
    if (qAdd > 0) {
      setqAdd(qAdd-1)
    }
  };
  const add = () => {
    if (qAdd < stock) {
      setqAdd (qAdd+1)
    }
  }
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={() => remove()} > <BagDash size={22} /> </Button>
      <Button variant="secondary">Add {qAdd}</Button>
      <Button variant="secondary" onClick={() => add()}> <BagPlus size={22} /> </Button>
    </ButtonGroup>      
  )
}

export default ItemCount
