import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';
import { DevTools } from '../containers';
import { persistState } from 'redux-devtools';

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}


const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducers, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // eslint-disable
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(reducers/* default if you use Babel 6+ */)
    );
  }
  // eslint-enable

  return store;
}
