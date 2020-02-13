import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../appContext.jsx";
import useHover from "../hooks/useHover"


function CartItem({item}) {
  const { toggleCart } = useContext(Context);
  const [ isHovered, hoverRef ] = useHover();

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
        ref={hoverRef}
        onClick={() => toggleCart(item)}></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem;
