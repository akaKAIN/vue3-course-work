import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { notification } from '@/utils/notifications'
import { SubmitCallback } from '@/models/form.model'

const MIN_PASSWORD_LENGTH = 5
export function useLoginForm(fn: SubmitCallback) {
  const { handleSubmit, isSubmitting } = useForm()
  const {
    value: email,
    handleBlur: emailBlur,
    errorMessage: emailError
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required(notification.required)
      .email(notification.wrongEmailFormat)
  )

  const {
    value: password,
    handleBlur: passwordBlur,
    errorMessage: passwordError
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required(notification.required)
      .min(
        MIN_PASSWORD_LENGTH,
        `${notification.wrongPasswordLength} ${MIN_PASSWORD_LENGTH}`
      )
  )

  const onSubmit = handleSubmit(fn)

  return {
    email,
    emailError,
    emailBlur,
    password,
    passwordBlur,
    passwordError,
    isSubmitting,
    onSubmit
  }
}
