import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import helper from '../../utils/helpers'
import Form from './form/Form'
import FormError from './form/Error'
import FormSuccess from './form/Success'
import axios from 'axios';
import ErrorState from './ErrorState'

import './Job.styl'

class Job extends React.Component {

	constructor(props) {

      super(props);
      this.displayName = 'Job';
      
      this.state = {
      	job:[],
      	fromViewState: 'form',
      	success:false
      };
      
  }
  componentDidUpdate(prevProps, prevState) {
  	ReactDom.findDOMNode(this).scrollIntoView();
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
			this.setState({job:data, success:true});
		}).catch((err)=>{
			this.setState({success:false});
		});

  }
  handleSubmit(event){
  	event.preventDefault();

  	let isValid = true
  	const form = this.refs.myform;

  	form.state.fields.forEach((ref) => {
      isValid = form.refs[ref].validate() && isValid
    });

    if(isValid){
    	console.log('ready to go');
    	const form = event.target;
  		const formData = new FormData(form);

    	axios.post(
			  '/service/submit-job',
			  formData
			)
			.then((response)=>{
				console.log('worked! server response',response);
				this.setState({fromViewState: 'success'});
			})
			.catch((err)=>{
				console.log('there was an error',err);
				this.setState({fromViewState: 'error'});
			});
    	
    }
  }
	render(){

		let wrapperClassName = `careers-container-job`;
		let formViewToshow = (<div> </div>);

		if(this.state.success !== false){

			
			if(this.state.fromViewState === 'form'){
				formViewToshow = <Form job_id={this.state.job.id} onSubmit={this.handleSubmit.bind(this)} ref="myform"/>;
			}else if(this.state.fromViewState === 'success'){
				formViewToshow = <FormSuccess />
			}else{
				formViewToshow = <FormError />
			}
		}else{
			wrapperClassName = wrapperClassName+' show-error';
		}
		return(
			<div className={wrapperClassName}>
				<Link className="link"to={`/careers`}>
					<h2 className="headline">{this.state.job.title}</h2>
				</Link>
					{formViewToshow}
				<ErrorState />
			</div>
			)
	}
	//<div className="description"  dangerouslySetInnerHTML={{__html: this.state.job.content}} />
};

export default Job;
