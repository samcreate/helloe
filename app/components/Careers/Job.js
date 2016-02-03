import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import helper from '../../utils/helpers'
import Form from './form/Form'

import './Job.styl'

class Job extends React.Component {

	constructor(props) {

      super(props);
      this.displayName = 'Job';
      
      this.state = {
      	job:[]
      };
      
  }
  componentDidMount() {
  	helper.getJob(this.props.params.job_id)
		.then(({data})=>{
			
			var desc = unescape(data.content)
            .replace(/&amp;/g, '&')
						.replace(/&quot;/g, '"')
						.replace(/&#39;/g, '\'')
						.replace(/&lt;/g, '<')
						.replace(/&gt;/g, '>');
      data.content = desc;
			this.setState({job:data});
		});
      
  }
  handleSubmit(e){

  }
	render(){

		return(
			<div className="careers-container-job">
				<h2 className="headline">{this.state.job.title}</h2>
				<div className="description"  dangerouslySetInnerHTML={{__html: this.state.job.content}} />
				<Form job_id={this.state.job.id} />
			</div>
			)
	}
};

export default Job;

//				<a className="button" href={`mailto:careers@helloelephant.com?subject=${this.state.job.title} Application`}>Apply</a>
