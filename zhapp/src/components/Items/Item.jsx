import React from 'react';
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  const {name, image, category, price, id} = item;
  console.log(item);

  return (
    <Col>
      <Card>
        <Link to={`/productos/${id}`} className="card nav-link">
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title style={{color: "black"}}>{name}</Card.Title>
          <Card.Text style={{color: "black"}}>
            <strong>Categoria:</strong> {category} <br></br>
            <strong>Precio:</strong> $ {price} 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
