import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { CartX } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import firebase from 'firebase';


import { useCartContext } from '../Context/CartContext';
import './Cart';
import { getFirestore } from '../Services/getFirebase';

const Cart = () => {
  const {cartList, deleteCart, deleteItem, totalPxQ} = useCartContext();
  
  const pxq = (a,b) => {
    return a*b
  }
 
  const buy = () => {
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = {name: 'Juan Perez', email:'juan@perez,com.ar', phone: 1555550000, payment:'cash'};
    order.total = totalPxQ();
    order.items = cartList.map(cartItem => {
      const id = cartItem.item.id;
      const item = cartItem.item.name;
      const price = pxq(cartItem.item.price, cartItem.cantidad);
      const quant = cartItem.cantidad;

      return {id, item, price, quant}
    })

    const dbOrder = getFirestore();
    
    const orderReady = dbOrder.collection('orders')
    orderReady.add(order)
    .then((IdDocumento)=>{
      setTimeout(alert(`Su orden ${IdDocumento.id} esta siendo procesada`), 3000)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(()=>{
      alert('Su compra ha finalizado de manera exitosa')
    })
    
    deleteCart();

    const updateItems = dbOrder.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id));

    const batch = dbOrder.batch();

    updateItems.get()
    .then(collection => {
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cartList.find(it => it.item.id === docSnapshot.id).cantidad
        })
      })
      batch.commit().then(resp => {
        console.log('modificado');
      })
      .catch(er => {
        console.log(er);
      })
    })
  }

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
            <td>$ {totalPxQ()}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={deleteCart} variant="danger">Eliminar Carrito</Button>{' '}    
      <Button onClick={buy} variant="success">Terminar Compra</Button>
      </>
      }
    </>
  );
}

export default Cart;
