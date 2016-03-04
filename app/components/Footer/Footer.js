import React from 'react';
import { Link } from 'react-router'
import './Footer.styl';

class Footer extends React.Component {
		constructor(props) {

		  super(props);
		  this.displayName = 'Footer';
		  
		  
		}

		componentDidMount() {
			//window.scroll.bind(this._scroll_handler);
			console.log('here')
			window.addEventListener('scroll', this._scroll_handler.bind(this), false);
		}

		_scroll_handler(e){
			let doc = document.documentElement;
			let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
			
			if(top > 110){
				this.refs.myFooter.className = "add_black";
			}else{
				this.refs.myFooter.className = "";
			}
		}
		render(){
	    return(
			<footer ref="myFooter">

				<div className="copy__holder">
					<span className="caption">By appointment only.&nbsp;&nbsp;</span>
					<span className="address">1153 Mission Street, San Francisco</span>
				</div>
				<nav>
				  <Link className="link" to={`/`}>Home</Link>
				  <Link className="link"to={`/careers`}>Careers</Link>
				  <a className="link" href="mailto:contact@helloelephant.com">Contact</a>
				</nav>
			</footer>
	    )
  }
}
export default Footer;

