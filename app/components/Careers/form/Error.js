import React from 'react';

class Error extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="form-error">
    		<h3>Submission Error</h3>
      	<p>I'm Sorry, there seem to be an issue with your submission. Please refresh and try again! If the issue persists, please <a className="link" href="mailto:contact@helloelephant.com">contact us</a> and let us know.</p>
      </div>
    );
  }
}
export default Error;