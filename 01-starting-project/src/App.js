import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./Cart/Cart";

import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Store from "./pages/Store";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <main>
        <Switch>
          <Route path="/store" exact>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            {<Store onShowCart={showCartHandler} />}
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
