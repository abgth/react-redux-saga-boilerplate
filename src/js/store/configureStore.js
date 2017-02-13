import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../RootReducer';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {


  let middleware = applyMiddleware(thunk);
  let enhancer;


  if (process.env.NODE_ENV !== 'production') {

    let middlewares = [require('redux-immutable-state-invariant')(),thunk];
    middleware = applyMiddleware(...middlewares);

    let getDebugSessionKey = function () {
      // By default we try to read the key from ?debug_session=<key> in the address bar
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
      return (matches && matches.length) ? matches[1] : null;
    };

    enhancer = compose(

      // Middleware we want to use in development
      middleware,
      window.devToolsExtension ?
        window.devToolsExtension() :
        require('../dev-tools/DevTools').default.instrument(),

      // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
      persistState(getDebugSessionKey())
    );
  } else {
     enhancer = compose(
        middleware
     );
  }

  const store = createStore(rootReducer, initialState, enhancer);

 /* store.subscribe(() => {
    console.log(store.getState());
  });*/

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../RootReducer', () =>
      store.replaceReducer(require('../RootReducer').default)
    );
  }

  return store;
}
