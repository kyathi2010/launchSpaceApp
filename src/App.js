import React from 'react';

import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { fetchAllData } from './actions/launchAction'
import AppRoute from "./AppRoute";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
store.dispatch(fetchAllData())
function App() {
  return (
    <Provider store={store}>
       <AppRoute />
    </Provider>
  );
}

export default App;
