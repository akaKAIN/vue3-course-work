import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { notification } from '@/utils/notifications'
import { SubmitCallback } from '@/models/form.model'

const MIN_COUNT_VALUE = 0
const MIN_PRICE_VALUE = 1

export function useCreateProductForm(fn: SubmitCallback) {
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
      .required(notification.required)
  )

  const { value: price, errorMessage: pError, handleBlur: pBlur } = useField(
    'price',
    yup
      .number()
      .required(notification.required)
      .min(MIN_PRICE_VALUE, `${notification.cannotBeLess} ${MIN_PRICE_VALUE}`)
  )

  const {
    value: category,
    errorMessage: catError,
    handleBlur: catBlur
  } = useField('category', yup.string().required(notification.required))

  const { value: image, errorMessage: iError, handleBlur: iBlur } = useField(
    'image',
    yup.string().required(notification.required)
  )

  const onSubmit = handleSubmit(fn)

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
    category,
    catError,
    catBlur,
    image,
    iError,
    iBlur,
    isSubmitting,
    onSubmit
  }
}
