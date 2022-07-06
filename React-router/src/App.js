import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/pages/ProductDetail";
function App() {
  return (
    <main>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
