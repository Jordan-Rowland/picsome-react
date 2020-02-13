import React from "react";
import Header from "./components/Header.jsx";
import Cart from "./pages/Cart.jsx";
import Photos from "./pages/Photos.jsx";
import { Route, Switch } from "react-router-dom";
// import { Context } from "./appContext.jsx"


function App() {
  // const context = useContext(Context)
  // console.log(context)
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default App