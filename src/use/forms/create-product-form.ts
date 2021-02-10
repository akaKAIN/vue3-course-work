import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { notification } from '@/utils/notifications'

const MIN_COUNT_VALUE = 0
const MIN_PRICE_VALUE = 1

export function useCreateProductForm() {
  const { isSubmitting, handleSubmit } = useForm()
  const { value: title, errorMessage: tError, handleBlur: tBlur } = useField(
    'title',
    yup
      .string()
      .trim()
      .required(notification.required)
  )

  const { value: count, errorMessage: cError, handleBlur: cBlur } = useField(
    'count',
    yup
      .number()
      .min(MIN_COUNT_VALUE, `${notification.cannotBeLess} ${MIN_COUNT_VALUE}`)
  )

  const { value: price, errorMessage: pError, handleBlur: pBlur } = useField(
    'price',
    yup
      .number()
      .required(notification.required)
      .min(MIN_PRICE_VALUE, `${notification.cannotBeLess} ${MIN_PRICE_VALUE}`)
  )

  return {
    title,
    tError,
    tBlur,
    count,
    cError,
    cBlur,
    price,
    pError,
    pBlur,
    isSubmitting,
    handleSubmit
  }
}
