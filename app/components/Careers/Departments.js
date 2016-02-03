import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import helper from '../../utils/helpers'

import './Departments.styl'

class Departments extends React.Component {

	constructor(props) {

      super(props);
      this.displayName = 'Departments';
      
  }

	render(){
		let departments_list = []

		this.props.appState.careers.forEach((department, index) => {
			departments_list.push(<li className="department" key={index}>
				<h4><Link className="link"to={`/careers/${index}`}>{department.name} <p className="openingCount"> {department.count} Openings</p> </Link> </h4>
			</li>);
		});

		return(
			<div className="careers-container-departments">
				<h2 className="headline">What do you do?</h2>
				<ul className="departments">
						{departments_list}
				</ul>
			</div>
			)
	}
};

export default Departments;

