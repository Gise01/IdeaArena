import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BagDash, BagPlus } from 'react-bootstrap-icons';

const ItemCount = ({stock, onAdd}) => {
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
      <label style={{'color': 'black', 'display': 'block'}} >Stock: {stock}</label>
      <div className="justify-content-md-center">
        <Button variant="secondary" onClick={() => remove()} disabled= {qAdd===1||qAdd===0?true:null}> <BagDash size={18} /> </Button>
        <input type="text" value={qAdd} style={{'width': '50px', 'marginLeft': '5px', 'marginRight': '5px'}} />
        <Button variant="secondary" onClick={() => add()} disabled= {qAdd===stock?true:null}> <BagPlus size={18} /> </Button>
      </div>
      <Button variant="warning" onClick={() => onAdd(qAdd)} disabled= {qAdd===0?true:null}>Comprar</Button>
    </>
  )
}

export default ItemCount
