import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Application from './components/Application'
import main from './reducers/main'

const store = createStore(
    main,
    applyMiddleware(
        thunkMiddleware
    )
)

const domContainer = document.querySelector('#react_application')
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Application}/>
        </Router>
    </Provider>,
    domContainer
)
