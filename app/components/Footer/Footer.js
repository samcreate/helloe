import React from 'react';
import { Link } from 'react-router'
import './Footer.styl';

const Footer = () =>{
    return(
		<footer>
			<span className="caption">By appointment only.&nbsp;&nbsp;</span>
			<span className="address">1153 Mission Street, San Francisco</span>

			<nav>
			  <Link className="link" to={`/`}>Home</Link>
			  <Link className="link"to={`/careers/test`}>Careers</Link>
			  <a className="link" href="mailto:contact@helloelephant.com">Contact</a>
			</nav>
		</footer>
    )
}
export default Footer;

