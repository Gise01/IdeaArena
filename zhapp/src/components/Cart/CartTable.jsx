import React from 'react';
import { CartX } from 'react-bootstrap-icons';
import { Button, Table } from 'react-bootstrap';

const CartTable = ({cartList, deleteItem, totalPxQ, pxq}) => {
  
  return (
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
            <td colSpan="3">TOTAL</td>
            <td colSpan="2">$ {totalPxQ()}</td>
          </tr>
        </tbody>
      </Table>
  )
}

export default CartTable
