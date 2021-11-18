import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Swal from 'sweetalert2';

import { useCartContext } from '../Context/CartContext';
import './Cart.css';
import { getFirestore } from '../Services/getFirebase';
import CartTable from './CartTable';
import CartForm from './CartForm';

const Cart = () => {
  const {cartList, deleteCart, deleteItem, totalPxQ} = useCartContext();
  
  const pxq = (a,b) => {
    return a*b
  }

  const [dataForm, setDataForm] = useState({});
 
  const buy = (dataForm) => {
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = {name: dataForm.fullName, email:dataForm.email, phone: dataForm.phone, payment:dataForm.payment};
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
      Swal.fire({
        icon: 'info',
        title: `Su orden ${IdDocumento.id} se proceso correctamente, gracias por habernos elegido`,
        showConfirmButton: false,
        timer: 3000
      })
    })
    .catch(error => {
      console.log(error)
    })
    .finally(()=>{
      deleteCart();
    })
    

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
      <h3>Su compra incluye</h3>
      <div className="cart">
        <div className="cartTable">
          <CartTable cartList={cartList} deleteItem={deleteItem} totalPxQ={totalPxQ} pxq={pxq} />
        </div>
        <div className="cartForm">
          <CartForm buy={buy} deleteCart={deleteCart} setDataForm={setDataForm} dataForm={dataForm}/>
        </div>
      </div>
      </>
      }
    </>
  );
}

export default Cart;
