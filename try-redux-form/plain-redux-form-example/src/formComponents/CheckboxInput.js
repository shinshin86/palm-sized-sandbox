import React, { Component } from 'react'

export default class CheckboxInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { input, label, type, meta, meta: { touched, error }} = this.props
    return (
      <div>
        <label htmlFor="employed">{label}</label>
        <div>
          <input
            {...input}
            type={type}
          />
        </div>
      </div>
    )
  }
}
