import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route} from 'react-router'
import Footer from '../components/Footer/Footer'



var css = require('./Main.styl'); 


class Main extends React.Component {
//let Main = React.createClass({
	render(){
		return(
			<div className="main-container">
				<div className="container">
					{this.props.children}
				</div>
				<Footer />
			</div>
			)
	}
};

export default Main;

