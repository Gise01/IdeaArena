import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ItemDetail = ({itemIdFind}) => {
  const {name, type, price, image, id} = itemIdFind

  return (
    <>
      <Container>
        <Card style={{ width: '36rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {type} {name} fabricado con materiales de primera calidad. Ideales para solucionar el problema de humedad de su casa. Cada unidad cuesta ${price}. Diseños exclusivos que embellecen los ambientes
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ItemDetail;
