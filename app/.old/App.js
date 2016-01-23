import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import routes from './config/routes'

// import 'jeet'
import './App.sass'


ReactDOM.render(
	<Router>{routes}</Router>, 
	document.getElementById('app')
	);