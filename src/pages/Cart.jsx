import React, { useContext, useState } from "react";
import { Context } from "../appContext.jsx";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const [ checkingOut, setCheckingOut ] = useState(false);
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  const buttonText = checkingOut ? "Ordering..." : "Place Order"

  function checkOut() {
    setCheckingOut(true);
    console.log(checkingOut);
    setTimeout(() => {
      setCheckingOut(false);
      setCartItems([]);
    }, 3000);
  }

  return (
    <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {totalCostDisplay}</p>
        {
          cartItems.length > 0 ?
        <div className="order-button">
          <button onClick={checkOut}>{buttonText}</button>
        </div>
          : <p>No items in cart</p>
        }
    </main>
  );
}

export default Cart;