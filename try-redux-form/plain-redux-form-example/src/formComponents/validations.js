const _maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const required = value => ( value ? undefined : 'Required' )

export const maxLength140 = _maxLength(140)

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
