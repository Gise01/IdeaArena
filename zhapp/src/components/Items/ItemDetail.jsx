import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

import ItemCount from './ItemCount';


const ItemDetail = ({itemId}) => {
  const {name, category, price, image, stock} = itemId

  const {cartList, addItem, addCart} = useCartContext();  

  const onAdd = (qty) => {
    if (cartList.length === 0) {
      alert (`Ud agrego ${qty} unidades al carrito`);
      addCart(qty);
      setSale(true);
      addItem({item: itemId, cantidad: qty})
    } else {
      let idDouble = cartList.find(item => item.item.id === itemId.id)
      if (idDouble) {
        alert (`Ud agrego ${qty} unidades al carrito`);
        addCart(qty);
        idDouble.cantidad = idDouble.cantidad+qty;
        setSale(true);
      } else {
        alert (`Ud agrego ${qty} unidades al carrito`);
        addCart(qty);
        setSale(true);
        addItem({item: itemId, cantidad: qty})
      }
    }
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
              {category} {name} fabricado con materiales de primera calidad. Ideales para solucionar el problema de humedad de su casa. Cada unidad cuesta $ {price}. Diseños exclusivos que embellecen los ambientes
            </Card.Text>
            <Card.Footer>
              <Link to="/" className="btn btn-secondary">Volver a productos</Link>
              <Link to={`/categorias/${category}`} className="btn btn-secondary">Volver a {category}</Link>
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
