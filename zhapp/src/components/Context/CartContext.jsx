import React, {useState, createContext, useContext} from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

  const [cartList, setcartList] = useState([]);

  const addItem = (item) => {
    setcartList([...cartList, item])
  }

  const [qBuy, setqBuy] = useState(0);
  
  const addCart = (qty) => {
    setqBuy (qBuy+qty)
  }
  
  const deleteCart = () => {
    setcartList ([]);
    setqBuy(0)
  }

  const deleteItem = (id) => {
    let item = cartList.find(item => item.item.id === id);
    let index = cartList.indexOf(item);
    cartList.splice(index,1);
    setqBuy (qBuy-item.cantidad)
    setcartList([...cartList])
  }

  return (
    <>
      <CartContext.Provider value = {{cartList, addItem, deleteCart, addCart, qBuy, deleteItem}}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContextProvider;
