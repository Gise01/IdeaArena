import React, { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
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
    <>
      <Stack direction="horizontal" gap={4} className="justify-content-md-center">
        <Button variant="secondary" onClick={() => remove()} disabled= {qAdd===1||qAdd===0?true:null}> <BagDash size={18} /> </Button>
        <span mx-auto>{qAdd}</span>
        <Button variant="secondary" onClick={() => add()} disabled= {qAdd===stock?true:null}> <BagPlus size={18} /> </Button>
      </Stack>
      <Button variant="warning" onClick={() => onAdd(qAdd)} disabled= {qAdd===0?true:null}>Comprar</Button>
    </>
  )
}

export default ItemCount
