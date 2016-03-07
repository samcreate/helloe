import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router'
import Input from './Input'
import axios from 'axios';

import './Form.styl'

class Form extends React.Component {

	constructor(props) {

      super(props);

      this.displayName = 'Form';

      this.state = {
	      fields: ['first_name', 'last_name', 'email', 'resume','question_498775']
	    }
      
  }
  componentDidMount() {

      
  }

  fileChange(event){
  	const filename = event.target.files[0].name;
  	const span = event.target.parentNode.parentNode.nextSibling;
  				span.innerHTML = filename
  }

	render(){

		return(
			<form ref="myForm" method="POST" action="/service/submit-job" encType="multipart/form-data" onSubmit={this.props.onSubmit}>
				<fieldset className="form__header">
					<h3>
						Apply Now.
					</h3>
					<p className="req">* required field</p>
					<input type="hidden" name="id" value={this.props.job_id}  />
					<input type="hidden" name="mapped_url_token" />
				</fieldset>
				<fieldset>
					<Input ref="first_name"
          attr={{ placeholder: 'First Name *', name:"first_name" }}
          validator={ v => v.trim().length > 0 }
          validationMessage="First name is required."
          />
          <Input ref="last_name"
          attr={{ placeholder: 'Last Name *', name:"last_name" }}
          validator={ v => v.trim().length > 0 }
          validationMessage="Last name is required."
          />
          <Input ref="email"
          attr={{ placeholder: 'Email *', name:"email", type:"email" }}
          validator={ v => v.trim().length > 0  && v.indexOf("@") != -1}
          validationMessage="Email is required."
          />

					<input type="tel" name="phone" placeholder="Phone" />

					<div className="input-wrapper">
						<Input ref="resume"
		          attr={{ name:"resume", type:"file", label: "Attach Resume *" }}
		          validator={ v => v.trim().length > 0 }
		          validationMessage="Resume is required."
		          extraClasses="input_file"
		          update={this.fileChange.bind(this)}
		          />
						<span>no file chosen</span>
					</div>
					
					<div className="input-wrapper">
						<Input ref="cover_letter"
	          attr={{ name:"cover_letter", type:"file", label: "Attach Cover Letter" }}
	          extraClasses="input_file"
	          update={this.fileChange.bind(this)}
	          />
						<span>no file chosen</span>
					</div>
					<input type="url" name="question_498773" placeholder="LinkedIn Profile"  />
					<input type="url" name="question_498774" placeholder="Website" />
					<Input ref="question_498775"
          attr={{ placeholder: 'How did you hear about this job? *', name:"question_498775" }}
          validator={ v => v.trim().length > 0 }
          validationMessage="First name is required."
          />
          <input type="submit" value="Submit" />
				</fieldset>
			</form>)
	}
};

export default Form;

