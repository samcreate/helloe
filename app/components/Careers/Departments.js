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
      
  }

  _handleClickToScroll(event){
  	event.preventDefault()
  	this.refs.departments.scrollIntoView()
  }

	render(){
		let departments_list = [];
		let wrapperClassName = `careers-container-departments parallax`;
		let totalCount = 0;
		if(this.props.appState.success !== false){
			

			this.props.appState.careers.forEach((department, index) => {
				departments_list.push(<li className="department" key={index}>
					<h4><Link className="link"to={`/careers/${index}`}>{department.name} <p className="openingCount"> {department.count} Openings</p> </Link> </h4>
				</li>);
				totalCount += department.count;
			});
		
		}else{
			wrapperClassName = wrapperClassName+' show-error';
		}
		
		

		return(
			<div className={wrapperClassName}>
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

