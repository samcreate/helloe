import React from 'react';
export default class FieldError extends React.Component {
  render() {
    return (
      <div className="field__validation">
        {this.props.message}
      </div>
    )
  }
}

FieldError.propTypes = {
  message: React.PropTypes.string,
}