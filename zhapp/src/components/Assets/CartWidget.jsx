import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';

const CartWidget = ({qBuy}) => {
  

  return (
      <div className="position-relative">
        <Cart2 color="white" size={36} />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {qBuy}
        </span>
      </div>
  )
}

export default CartWidget
