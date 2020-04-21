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
import { reducer as formReducer } from 'redux-form';
import HorsesNew from './containers/horses_new';
import HorsesShow from './containers/horses_show';

import '../assets/stylesheets/application.scss';

const stableName = "Mon-Ecurie"

const initialState = {
  stableName: stableName,
  horses: []
};

const reducers = combineReducers({
  stableName: (state = stableName, action) => state,
  horses: horsesReducer,
  form: formReducer
});

const store = createStore(reducers, initialState, middlewares);

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path={"/"} exact component={App} />
        <Route path={"/new"} exact component={HorsesNew}/>
        <Route path={"/cars/:id"} component={HorsesShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
