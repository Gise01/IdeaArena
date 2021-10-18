import React from 'react';
import { Button, Table } from 'react-bootstrap';

import { useCartContext } from '../Context/CartContext';
import './Cart';


const Cart = () => {
  const {cartList, deleteCart} = useCartContext();
  
  const pxq = (a,b) => {
    return a*b
  }
  
  return (
    <>
      {cartList.length === 0
      ?
      <h3>Aun no has seleccionado artílos para tu compra</h3>
      :
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((item=> ( 
            <tr key={item.item.id}>
              <td>{item.cantidad}</td>
              <td>{`${item.item.type} ${item.item.name}`}</td>
              <td>{item.item.price}</td>
              <td>{pxq(item.cantidad,item.item.price)}</td>
            </tr>
            ))) }
            <tr>
              <td></td>
              <td colSpan="2">TOTAL</td>
              <td>$ {}</td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={deleteCart} variant="danger">Eliminar Carrito</Button>
      </>
      }
    </>
  );
}

export default Cart;
