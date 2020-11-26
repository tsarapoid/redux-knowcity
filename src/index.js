import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from './App'
import rootReducer from './RootReducer'
import './Styles/index.css'

/* 
const store = createStore(
rootReducer,
applyMiddleware(logger));
*/

/* 
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__())
*/
 
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
//  applyMiddleware(thunk),
    reduxDevtools && reduxDevtools()
  )
)




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



