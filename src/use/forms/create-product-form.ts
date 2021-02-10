import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export function useCreateProductForm() {
  const { isSubmitting, handleSubmit } = useForm()
  const { value: title, errorMessage: tError, handleBlur: tBlur } = useField(
    'title',
    yup
      .string()
      .trim()
      .required('Обязательное поле для заполнения')
  )

  const { value: count, errorMessage: cError, handleBlur: cBlur } = useField(
    'count',
    yup.number().min(0, 'Количесво не может быть меньше 0')
  )

  const { value: price, errorMessage: pError, handleBlur: pBlur } = useField(
    'price',
    yup
      .number()
      .required('Обязательное поле для заполнения')
      .min(1, 'Стоимость не может быть меньше 1')
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
