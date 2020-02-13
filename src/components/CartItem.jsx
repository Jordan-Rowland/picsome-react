import React, { useContext } from "react";
import { Context } from "../appContext.jsx";

function CartItem({item}) {
  const { toggleCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={() => toggleCart(item)}></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
