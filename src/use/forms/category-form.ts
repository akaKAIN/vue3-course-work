import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { notification } from '@/utils/notifications'
import { SubmitCallback } from '@/models/form.model'

export function useCategoryForm(fn: SubmitCallback) {
  const { isSubmitting, handleSubmit } = useForm()

  const {
    value: title,
    errorMessage: titleError,
    handleBlur: titleBlur
  } = useField(
    'title',
    yup
      .string()
      .trim()
      .required(notification.required)
  )
  const {
    value: type,
    errorMessage: typeError,
    handleBlur: typeBlur
  } = useField(
    'type',
    yup
      .string()
      .trim()
      .required(notification.required)
  )
  const omSubmit = handleSubmit(fn)

  return {
    isSubmitting,
    omSubmit,
    title,
    titleBlur,
    titleError,
    type,
    typeBlur,
    typeError
  }
}
