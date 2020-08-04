import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cart from '../../pages/Cart';
import Shipping from '../../pages/Shipping';
import NotFound from '../../pages/NotFound';

const Content = () => (
  <div className="content">
    <Switch>
      <Redirect
        exact
        from="/"
        to="/cart"
      />
      <Route
        component={(props) => <Cart {...props} />}
        exact
        path="/cart"
      />
      <Route
        component={(props) => <Shipping {...props} />}
        exact
        path="/shipping"
      />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
