import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useSearchFilterForm() {
  const { handleSubmit, handleReset } = useForm()
  const { value: searchText, handleBlur: sBlur } = useField(
    'searchText',
    yup.string().trim()
  )

  const onSearch = handleSubmit(values => console.log('searching', values))
  const clear = handleReset
  return { searchText, sBlur, onSearch, clear }
}
