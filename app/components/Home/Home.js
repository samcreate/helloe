import React from 'react';
import ReactDom from 'react-dom';


import './Home.styl';

export default class Home extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
  	ReactDom.findDOMNode(this).scrollIntoView();
  }

  render() {
    return (
      <div className="home-container">
      	<ul>
			<li>E</li>
			<li>L</li>
			<li>E</li>
			<li>P</li>
			<li>H</li>
			<li>A</li>
			<li>N</li>
			<li>T</li>
		</ul>
      </div>
    );
  }
}
