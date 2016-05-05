import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { App, About, Home } from './containers';

export default () => (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);
