import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
  const {qBuy} = useCartContext();

  return (
    <Link to="/cart">
      <div className="position-relative">
        <Cart2 color="white" size={36} />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {qBuy}
        </span>
      </div>
    </Link>
  )
}

export default CartWidget
