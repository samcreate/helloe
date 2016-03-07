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
      	careers: new Map(),
      	success: false
      };
      
  }

  componentDidMount() {

  	helper.getDepartments()
		.then((careers)=>{
			this.setState({careers,success:true});
		}).catch((err)=>{
			console.log('greenhouse data api error: ',err);
			this.setState({success:false});
		});
  }

	render(){
		const Children = React.cloneElement(this.props.children, { appState: this.state });
		const url_class = this.props.location.pathname.split('/').join(' ').trim();

		//set the class of the body to the current route
		document.body.className = url_class;

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

