
import React from 'react';
import ReactDom from 'react-dom';
import FieldError from './FieldError'

export default class Input extends React.Component {
  constructor(props) {

  	super(props)
    
    this.state = { value: '', error: '' }

  }

  handleChange(event) {
    const newValue = this.props.filter 
      ? this.props.filter(event.target.value) 
      : event.target.value 

    this.setState({ value: newValue})
    this.state.value = newValue;
    
    if(this.props.update) this.props.update(event);

    this.validate()
  }

  validate() {
    if (this.props.validator && !this.props.validator.call(undefined, this.state.value)) {
      this.setState({ error: this.props.validationMessage })
      return false
    }

    this.setState({ error: '' })
    return true
  }

  render() {
    const attr = this.props.attr || {}
    const type = attr.type || 'text'
    const classes = ['field']
    attr.id = attr.id || attr.name
    const value = this.props.value
    const hasError = !(this.state.error === undefined || this.state.error.length === 0)

    if (this.props.extraClasses) {
      classes.push(this.props.extraClasses)
    }

    return (
      <div data-field
        data-field-error={hasError}
        className={classes.join(' ')}>
        {attr.label && <label className={attr.type+"__label"} htmlFor={attr.id} >{attr.label}</label>}
        <FieldError message={this.state.error} />
        <div className="field__input">
          <input type={type}
            className="input-text"
            value={value}
            onChange={this.handleChange.bind(this)}
            {...attr}
          />
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  extraClasses: React.PropTypes.string,
}