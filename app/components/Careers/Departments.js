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

	render(){
		let departments_list = [];
		let wrapperClassName = `careers-container-departments`;

		if(this.props.appState.success !== false){
			

			this.props.appState.careers.forEach((department, index) => {
				departments_list.push(<li className="department" key={index}>
					<h4><Link className="link"to={`/careers/${index}`}>{department.name} <p className="openingCount"> {department.count} Openings</p> </Link> </h4>
				</li>);
			});
		
		}else{
			wrapperClassName = wrapperClassName+' show-error';
		}
		
		

		return(
			<div className={wrapperClassName}>
				<h2 className="headline">What do you do?</h2>
				<ErrorState />
				<ul className="departments">
						{departments_list}
				</ul>
			</div>
			)
	}
};

export default Departments;

