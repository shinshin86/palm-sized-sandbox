import React, { Component } from 'react'
import { Field } from 'redux-form'

export default class RadioInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, type, meta, meta: { touched, error }} = this.props
    return (
      <div>
        <label>{label}</label>
        <div>
          <Field
            name={label}
            component={type}
          >
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
          { touched && error && <span style={{color: 'red'}}>{error}</span>}
        </div>
      </div>
    )
  }
}
