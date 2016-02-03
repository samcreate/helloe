import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route} from 'react-router'
import Footer from '../components/Footer/Footer'
import helper from '../utils/helpers'


var css = require('./Main.styl'); 


class Main extends React.Component {
//let Main = React.createClass({
	constructor(props) {

      super(props);
      this.displayName = 'Main';
      
      this.state = {
      	careers: new Map()
      };
      
  }

  componentDidMount() {
  	helper.getDepartmentsV2()
		.then((careers)=>{
			this.setState({careers});
		});
  }

	render(){

		const Children = React.cloneElement(this.props.children, { appState: this.state });

		return(
			<div className="main-container">
				<div className="container">
					{Children}
				</div>
				<Footer />
			</div>
			)
	}
};

export default Main;

