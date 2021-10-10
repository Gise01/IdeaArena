import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemDetail = ({itemIdFind}) => {
  const {name, type, price, image} = itemIdFind

  return (
    <>
      <Container>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {type} {name} fabricado con materiales de primera calidad. Ideales para solucionar el problema de humedad de su casa. Cada unidad cuesta $ {price}. Diseños exclusivos que embellecen los ambientes
            </Card.Text>
            <Link to="/productos" className="btn btn-secondary">Volver a Productos</Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ItemDetail;
