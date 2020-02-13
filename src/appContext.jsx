import React, { useState, useEffect } from "react";
const Context = React.createContext();


function ContextProvider(props) {
  const [ allPhotos, setAllPhotos ] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");
      const response = await res.json();
      setAllPhotos(response)
    }
    fetchData();
  }, [])


  function toggleFavorite(id) {
    const updatedPhotos = [...allPhotos];
    const photoIndex = updatedPhotos.findIndex(photo => id === photo.id);
    updatedPhotos[photoIndex].isFavorite = !updatedPhotos[photoIndex].isFavorite;
    setAllPhotos(updatedPhotos);
  }


  function toggleCart(newItem) {
    const isInCart = cartItems.some(item => item.id === newItem.id);
    let updatedCart;
    if (isInCart) {
      updatedCart = cartItems.filter(item => item.id !== newItem.id)
    } else {
      updatedCart = [...cartItems, newItem];
    }
    setCartItems(updatedCart);
  }

  return(
    <Context.Provider value={{allPhotos, toggleFavorite, cartItems, setCartItems, toggleCart}}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };