import React from 'react';
import { Link } from 'react-router'
import './Footer.sass';

const Footer = () =>{
    return(
		<footer>
			<span className="caption">By appointment only.&nbsp;&nbsp;</span>
			<span className="address">1153 Mission Street, San Francisco</span>

			<ul>
				<li> <Link to={`/careers`}>Careers</Link> </li>
				<li><a href="mailto:contact@helloelephant.com">Contact</a></li>
			</ul>
		</footer>
    )
}
export default Footer;