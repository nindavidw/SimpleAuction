import React from 'react';
import { useRouterHistory, IndexRedirect, Route, Router } from 'react-router';
import { createHistory } from 'history';
import { isJoined, join } from './actions/JoinActions';
import {
  App,
  About,
  Auction,
  Join
} from './containers';

export default (store) => {
  const requireJoin = (nextState, replace, cb) => {
    function checkJoined() {
      const { auth: { user } } = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/join');
      }
      cb();
    }

    if (!isJoined(store.getState())) {
      store.dispatch(join()).then(checkJoined);
    } else {
      checkJoined();
    }
  };

  const browserHistory = useRouterHistory(createHistory)({
    basename: document.getElementsByTagName('base')[0].getAttribute('href')
  });

  return (
    <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRedirect to="/join" />
        <Route path="join" component={Join} />
        <Route path="about" component={About} />

        <Route onEnter={requireJoin}>
          <Route path="auction" component={Auction} />
        </Route>
      </Route>
    </Router>
  );
};
