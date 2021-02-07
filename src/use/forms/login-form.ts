import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export function useLoginForm() {
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
      .required('Обязательное для заполенения поле')
      .email('Неверный фотмат электронной почты')
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
      .required('Обязательное для заполенения поле')
      .min(5, 'Длина пароля должна быть более 4')
  )

  const onSubmit = handleSubmit(values => console.log(values))

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
