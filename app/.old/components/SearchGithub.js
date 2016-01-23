import React from 'react';

class SearchGithub extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(){
  	let username = this.usernameRef.value;
  	this.usernameRef.value = '';
  	this.props.router.history.pushState(null, `/profile/${username}`);
  }

  getRef(ref){
  	this.usernameRef = ref;
  }

  render() {
    return (
      <div className="col-sm-12">
      	<form onSubmit={()=> this.handleSubmit()}>
      		<div className="form-group col-sm-7">
      			<input type="text" className="form-control" ref={this.getRef.bind(this)} />

      		</div>
      		<div className="form-group col-sm-5">
      			<button type="submit" className="btn btn-block btn-primary">Search Github</button>
      		</div>
      	</form>
      </div>
    );
  }
}

SearchGithub.propTypes = {
	router: React.PropTypes.object.isRequired
};



export default SearchGithub; 