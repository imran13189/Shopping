import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Store from './pages/store';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cart from "./pages/cart";
import AdminLayout from "./admin/layout/AdminLayout";
import Inventory from "./admin/inventory/Inventory";
import AppRoute from './AppRoute';
import Layout from './components/Layout';
import 'antd/dist/antd.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <AppRoute path="/about" component={About} layout={Layout} />
        <AppRoute path="/store" component={About} layout={Store} />
        <AppRoute exact path="/" component={Inventory} layout={AdminLayout} />
        <AppRoute path="/cart" component={Cart} layout={Layout} />
        <AppRoute path="*" component={NotFound} layout={Layout} />
      </Switch>
    </Router>
  );
}

export default App;