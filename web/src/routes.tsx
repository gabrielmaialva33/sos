import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
