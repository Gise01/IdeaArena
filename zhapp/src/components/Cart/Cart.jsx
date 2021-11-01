import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { CartX } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


import { useCartContext } from '../Context/CartContext';
import './Cart';


const Cart = () => {
  const {cartList, deleteCart, deleteItem} = useCartContext();
  
  const pxq = (a,b) => {
    return a*b
  }
  let total = 0;

  const totalPxQ = (a, b) => {
    let sum = a*b;
    total = total + sum;
    return total
  }
  
  total = cartList.map((item=> (totalPxQ(item.cantidad,item.item.price))))

  return (
    <>
      {cartList.length === 0
      ?
      <>
      <h3>Aun no has seleccionado artículos para tu compra</h3>
      <Link to="/" className="btn btn-warning">Iniciar compra</Link>
      </>
      :
      <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item=> ( 
            <tr key={item.item.id}>
              <td>{item.cantidad}</td>
              <td>{`${item.item.category} ${item.item.name}`}</td>
              <td>{item.item.price}</td>
              <td>{pxq(item.cantidad,item.item.price)}</td>
              <td><Button variant="danger" onClick={()=>deleteItem(item.item.id)}> <CartX size={18} /> </Button></td>
            </tr>
          ))) }
          <tr>
            <td></td>
            <td colSpan="2">TOTAL</td>
            <td>$ {total[total.length-1]}</td>
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
