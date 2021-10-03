import React, { useState } from 'react';
import { Cart2 } from 'react-bootstrap-icons';

const CartWidget = ({qAdd}) => {
 const [q, setQ] = useState(0);
  setQ(qAdd);

  return (
    <button type="button" className="badge bg-secondary position-relative">
      <Cart2 color="white" size={36} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{q}
      </span>
    </button>
  )
}

export default CartWidget
