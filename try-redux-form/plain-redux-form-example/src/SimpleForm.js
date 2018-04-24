import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FieldInput from './formComponents/FieldInput'
import RadioInput from './formComponents/RadioInput'
import SelectInput from './formComponents/SelectInput'
import CheckboxInput from './formComponents/CheckboxInput'
import TextareaInput from './formComponents/TextareaInput'
import { required, maxLength140, phoneNumber } from './formComponents/validations'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={FieldInput} label="First Name" validate={[required]} />
      <Field name="lastName" type="text" component={FieldInput} label="Last Name" validate={[required]} />
      <Field name="email" type="email" component={FieldInput} label="Email" validate={[required]} />
      <Field name="phoneNumber" type="text" component={FieldInput} label="Phone Numver" validate={[required, phoneNumber]} />
      <Field name="sex" type="radio" component={RadioInput} label="Sex" />
      <Field name="favoriteColor" type="select" component={SelectInput} label="Favorite Color" />
      <Field name="employed" type="checkbox" component={CheckboxInput} label="Employed" validate={[required]} />
      <Field name="notes" type="textarea" component={TextareaInput} label="Notes" validate={[maxLength140]} />
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
