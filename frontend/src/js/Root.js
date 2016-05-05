import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { DevTools } from './containers';
import Routes from './Routes';

const store = configureStore();

export default () => (
  <div>
    <Provider store={store}>
      <Routes />
    </Provider>
    <DevTools store={store} />
  </div>
);
