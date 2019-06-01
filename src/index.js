import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

import App from './app';
import config from './config';
import '../styles/core.scss';

const node = elementId => document.getElementById(elementId);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={config.store}>
      <ConnectedRouter history={config.history}> { /* place ConnectedRouter under Provider */ }
        <Switch>
          <Route exact path="/" component={Component} />
          <Route exact path="/1" render={() => (<div>Miss</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </ConnectedRouter>
    </Provider>,
    node('root'),
  );
};

if (module.hot) {
  module.hot.accept();
}

render(App);
