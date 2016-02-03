import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import helper from '../../utils/helpers'

import './JobList.styl'

class JobList extends React.Component {

	constructor(props) {

      super(props);
      this.displayName = 'JobList';
      
  }

	render(){
		
		const vocation = this.props.appState.careers.get(this.props.params.department_id);

		if(!vocation) return <div></div>;
		
		const jobs = [];

		vocation.jobs.forEach((job, index) => {
			jobs.push(<li className="department" key={index}>
				{job.id && <h4><Link className="link"to={`/careers/${this.props.params.department_id}/${job.id}`}>{job.title} </Link> </h4>}
			</li>)
		});

		return(
			<div className="careers-container-jobslist">
				<h2 className="headline">{vocation.name}</h2>
				<ul className="departments">
						{jobs}
				</ul>
			</div>
			)
	}
};

export default JobList;

