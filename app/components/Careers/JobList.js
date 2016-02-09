import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import helper from '../../utils/helpers'
import ErrorState from './ErrorState'

import './JobList.styl'

class JobList extends React.Component {

	constructor(props) {

      super(props);
      this.displayName = 'JobList';
      
  }

	render(){
		
		
		let wrapperClassName = `careers-container-jobslist`;
		let vocationName;
		const jobs = [];

		if(this.props.appState.success !== false){
			const vocation = this.props.appState.careers.get(this.props.params.department_id);
			vocationName = vocation.name;

			vocation.jobs.forEach((job, index) => {
				jobs.push(<li className="department" key={index}>
					{job.id && <h4><Link className="link"to={`/careers/${this.props.params.department_id}/${job.id}`}>{job.title} </Link> </h4>}
				</li>)
			});
		}else{
			vocationName = "";
			wrapperClassName = wrapperClassName+' show-error';
		}

		return(
			<div className={wrapperClassName}>
				<h2 className="headline">{vocationName}</h2>
				<ul className="departments">
						{jobs}
				</ul>
				<ErrorState />
			</div>
			)
	}
};

export default JobList;

