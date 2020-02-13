import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { Context } from "../appContext.jsx";
import useHover from "../hooks/useHover"


function Image({className, img}) {
  const { toggleFavorite, cartItems, toggleCart } = useContext(Context);
  const [ isHovered, hoverRef ] = useHover();

  function heartIcon() {
    if (img.isFavorite) {
      return (<i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>);
    } else if (isHovered) {
      return (<i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>);
    }
  }

  function addOrCartIcon() {
    const isInCart = cartItems.find(item => item.id === img.id);
    if (isInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => toggleCart(img)}></i>
    } else if (isHovered) {
      return <i className="ri-add-circle-line cart" onClick={() => toggleCart(img)}></i>
    }
  }

  return (
    <div
      className={`${className} image-container`}
      ref={hoverRef}
    >
      <img src={img.url} className="image-grid" alt="sup" />
      {heartIcon()}
      {addOrCartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image;
