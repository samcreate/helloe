import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import helper from '../../utils/helpers'
import ErrorState from './ErrorState'

import './Departments.styl'

class Departments extends React.Component {

	constructor(props) {

      super(props);
      this.displayName = 'Departments';
      this.state ={
      	jobs_shown:[]
      }
      console.log(this.props.appState)
  }

  _handleClickToScroll(event){
  	event.preventDefault()
  	this.refs.departments.scrollIntoView()
  }

  _buildOpenings(jobs){

  	let openings_html = [];

  	jobs.forEach((job, index) => {
  		openings_html.push(
  			
  			<li className="job">
  				<Link className="link"to={`/careers/job/${job.id}`}>
  					<h5 className="jobtitle">{job.title}</h5>
  					<p className="location">{job.location.name}</p>
  				 </Link>
  			</li>
  		)
  	});

  	return openings_html;
  }

  _handleClientServiceToggle(event){

  	event.preventDefault();
  	const jahbs = event.currentTarget.nextSibling;
  	const department_li = event.currentTarget.parentNode;

  	if( this.state.jobs_shown[jahbs.dataset.reactid] != null){
  		department_li.className = `department hide`;
  		this.state.jobs_shown[jahbs.dataset.reactid] = null;
  	}else{
  		department_li.className = `department show`;
  		this.state.jobs_shown[jahbs.dataset.reactid] = jahbs;
  	}
  				
  	
  }

  _pluralize(word, count){

  	if(count !== 1){1
  		word = word+'s';
  	}
  	return word;
  }

	render(){
		let departments_list = [];
		let wrapperClassName = `careers-container-departments parallax`;
		let totalCount = 0;
		if(this.props.appState.success !== false){
			

			this.props.appState.careers.forEach((department, index) => {
				departments_list.push(<li className="department" key={index}>
					<h4 onClick={this._handleClientServiceToggle.bind(this)}>
						<a href="#" className="link">
								{department.name}
							 	<p className="openingCount"> {department.count} {this._pluralize('Opening',department.count)}</p> 
					 	</a>
					</h4>
					<ul className="jobs">
						{this._buildOpenings(department.jobs)}
					</ul>
				</li>);
				totalCount += department.count;
			});
		
		}else{
			wrapperClassName = wrapperClassName+' show-error';
		}
		
		

		return(
			<div className={wrapperClassName}>
				<h1 className="logo">
					Elephant
				</h1>
				<ErrorState />
				<div className="parallax__group intro">
						<div className="headline__holder">
							<h2 className="headline">Careers is a tool that inspires and empowers engagement in SF and NY</h2>
							<a className="button" href="#jobs" onClick={this._handleClickToScroll.bind(this)}>Current Openings - {totalCount} </a>
						</div>
				</div>
				<div className="parallax__group careers">
						<ul className="departments" id="jobs" ref="departments">
								{departments_list}
						</ul>
				</div>
			</div>
			)
	}
};

export default Departments;

