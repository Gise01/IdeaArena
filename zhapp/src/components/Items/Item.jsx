import React, { useEffect }from 'react';
import { Card, Col } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = ({addCart, item, getId, itemId}) => {
  const {name, image, stock, type, price, id} = item;

  const onAdd = (qty) => {
    alert (`Ud agrego ${qty} unidades al carrito`);
    addCart(qty);
    console.log(addCart);
  }

  return (
    <Col>
      <Card type="button" value={id} onClick={() => {getId(id); console.log(id);}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Categoria:</strong> {type} <br></br>
            <strong>Precio:</strong> ${price} <br></br>
          </Card.Text>
          <Card.Footer>
            <ItemCount 
            onAdd = {onAdd}
            stock = {stock}/>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
    
  );
}

export default Item;
