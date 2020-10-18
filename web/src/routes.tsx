import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={SignIn} />

      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
