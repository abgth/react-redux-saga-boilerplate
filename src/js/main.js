//import '../styles/bootstrap.css';
// import '../styles/font-awesome.css';

import '../styles/styles.scss';
import '../styles/AddedStyles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

const store = configureStore();
const rootElement = document.getElementById('app');

let ComponentEl;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./dev-tools/DevTools').default;

  // If using routes
  ComponentEl = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
/*      <DevTools />*/
} else {
  ComponentEl = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
}

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    {ComponentEl}
  </Provider>,
  rootElement
);
