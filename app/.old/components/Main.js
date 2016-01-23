import React from 'react';
import ReactDom from 'react-dom';
import SearchGithub from './SearchGithub';
import {Router, Route} from 'react-router'
import Footer from './Footer/Footer';
//class HelloMessage extends React.Component {
class Main extends React.Component {

	render(){
		return(
			<div className="main-container">
				
				<Footer />
			</div>
			)
	}
};

export default Main;

