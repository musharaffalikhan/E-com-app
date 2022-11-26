import { Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
