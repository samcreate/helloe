import React from 'react';

export default class ErrorState extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="error_state"> 
				<h3>Excuse us, but there seem to be an issue.</h3>
				<p>I'm Sorry, there seem to be an issue. Please refresh and try again! If the issue persists, please <a className="link" href="mailto:contact@helloelephant.com">contact us</a> and let us know.
				</p>
			</div>
    );
  }
}
