import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route path='/checkout' component={Checkout} />
                <Route path='/orders' component={Orders} />
                <Route path='/' exact component={BurgerBuilder} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
