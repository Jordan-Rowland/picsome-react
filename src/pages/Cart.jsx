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


  function checkOut() {
    setCheckingOut(true);
    console.log(checkingOut);
    setTimeout(() => {
      // console.log("Checkout Complete")
      setCheckingOut(false);
    }, 3000);
    setCartItems([]);
  }

  return (
    <main className="cart-page">
      { checkingOut &&
      <h1>Ordering...</h1> }
      { !checkingOut &&
      <>
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {totalCostDisplay}</p>
        <div className="order-button">
        <button onClick={checkOut}>Place Order</button>
      </div>
      </>
      }
    </main>
  );
}

export default Cart;