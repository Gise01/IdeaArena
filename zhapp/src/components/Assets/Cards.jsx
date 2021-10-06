import React from 'react';
import { Card, Col } from 'react-bootstrap'
import ItemCount from '../Items/ItemCount'

const Cards = ({addCart, item}) => {
  const {name, image, stock, type} = item;

  const onAdd = (qty) => {
    alert (`Ud agrego ${qty} unidades al carrito`);
    addCart(qty);
    console.log(addCart);
  }

  return (    
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Categoria: {type}
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

export default Cards;
