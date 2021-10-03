import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { BagDash, BagPlus } from 'react-bootstrap-icons';

const ItemCount = (stock) => {
  stock = 10
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
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => remove()} > <BagDash size={22} /> </Button>
        <Button variant="secondary">Add {qAdd}</Button>
        <Button variant="secondary" onClick={() => add()}> <BagPlus size={22} /> </Button>
      </ButtonGroup>
      
    </div>
  );
}

export default ItemCount;
