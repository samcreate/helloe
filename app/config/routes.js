import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home/Home'
import Departments from '../components/Careers/Departments'
import JobList from '../components/Careers/JobList'
import Job from '../components/Careers/Job'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


export default (
	 <Route path="/" component={Main}>
	 	<Route path="careers/:department_id/:job_id" component={Job} />
	 	<Route path="careers/:department_id" component={JobList} />
	 	<Route path="careers" component={Departments} />
		<IndexRoute component={Home} />
	</Route>
);
	 