import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import App from './components/app';
import horsesReducer from './reducers/horses_reducer';

import '../assets/stylesheets/application.scss';

const stableName = "Mon-Ecurie"

const initialState = {
  stableName: stableName,
  //horses = []
  horses: [
    { id: 1, name: 'Flemme', breed: 'Arabe', owner: 'John', age: '4' },
    { id: 2, name: 'Gris poil', breed: 'Selle Francais', owner: 'Paul', age: '8' },
    { id: 3, name: 'Sprint', breed: 'Perceron', owner: 'James', age: '14' },
    { id: 4, name: 'Eclair', breed: 'Andalouse', owner: 'George', age: '10' }
  ]
};

const reducers = combineReducers({
  stableName: (state = stableName, action) => state,
  horses: horsesReducer
});

const store = createStore(reducers, initialState, middlewares);

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path={`/${stableName}`} exact component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
