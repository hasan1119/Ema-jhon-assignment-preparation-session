import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./components/shop/Shop.js";
import OrderReview from "./components/orderReview/OrderReview.js";
import Inventory from "./components/inventory/Inventory.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>

          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="*">
            <Shop></Shop>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
