import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home/Home'
import Careers from '../components/Careers/Careers'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


export default (
	 <Route path="/" component={Main}>
	 	<Route path="careers/:username" component={Careers} />
		<IndexRoute component={Home} />
	</Route>
);
	 