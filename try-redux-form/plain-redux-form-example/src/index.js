import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  Values
} from 'redux-form-website-template'
import store from './store'
import { showResults } from './api'
import SimpleForm from './SimpleForm'

const dest = document.getElementById('content')

const styles = {
  content: {
    width: '80%',
    padding: 30
  }
}

const renderApp = () => {
  render(
    <Provider store={store}>
      <div style={styles.content}>
        <h2>Form</h2>
        <SimpleForm onSubmit={showResults} />
        <Values form="simple" />
      </div>
    </Provider>,
    dest
  )
}

renderApp()
