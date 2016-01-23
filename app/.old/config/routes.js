import React from 'react'
import Main from '../components/Main'
import Careers from '../components/Careers/Careers'
import Home from '../components/Home'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'


export default (
	 <Route path="/" component={Main}>
	 	<Route path="/careers" component={Careers} />
	 	<IndexRoute component={Home} />
	</Route>
);