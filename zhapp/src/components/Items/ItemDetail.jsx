import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ItemCount from './ItemCount'

const ItemDetail = ({itemIdFind, addCart}) => {
  const {name, type, price, image, stock} = itemIdFind

  const onAdd = (qty) => {
    alert (`Ud agrego ${qty} unidades al carrito`);
    addCart(qty);
    setSale(true)
  }

  const [sale, setSale] = useState(false);

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
            <Card.Footer>
              <Link to="/productos" className="btn btn-secondary">Volver a productos</Link>
              <Link to={`/categorias/${type}`} className="btn btn-secondary">Volver a {type}</Link>
              {sale
              ?
              <Link to="/cart" className="btn btn-warning">Finalizar Compra</Link>
              :
              <ItemCount 
              onAdd = {onAdd}
              stock = {stock}/>
              }
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ItemDetail;
