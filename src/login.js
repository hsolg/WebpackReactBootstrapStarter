import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Login from './components/Login'
import '../stylesheets/login.scss'

const domContainer = document.querySelector('#react_application')
ReactDOM.render(<Login/>, domContainer)
