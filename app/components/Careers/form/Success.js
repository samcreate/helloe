import React from 'react';

class Success extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-success">
      	<h3>Success!</h3>
      	<p>We will get back to you shortly.</p>
      </div>
    );
  }
}

export default Success