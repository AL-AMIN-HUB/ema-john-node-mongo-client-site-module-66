import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFounds from "./components/NotFounts/NotFounds";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>{" "}
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>{" "}
          <Route exact path="/review">
            <OrderReview></OrderReview>
          </Route>{" "}
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="*">
            <NotFounds></NotFounds>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
