import React, { Component } from 'react'

export default class RadioInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { input, label, type, meta, meta: { touched, error }} = this.props
    return (
      <div>
        <label>{label}</label>
        <div>
          <label>
            <input
              {...input}
              name={label}
              type={type}
              checked={input.value}
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <input
              {...input}
              name={label}
              type={type}
              checked={input.value}
              value="female"
            />{' '}
            Female
          </label>
          { touched && error && <span style={{color: 'red'}}>{error}</span>}
        </div>
      </div>
    )
  }
}
