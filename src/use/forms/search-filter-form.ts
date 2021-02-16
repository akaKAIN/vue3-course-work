import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useSearchFilterForm() {
  const router = useRouter()
  const route = useRoute()
  const { handleSubmit, handleReset } = useForm()
  const { value: searchText, handleBlur: sBlur } = useField(
    'searchText',
    yup.string().trim()
  )
  watch(searchText, () => {
    router.replace({
      name: 'home',
      query: { ...route.query, search: searchText.value }
    })
  })

  const onSearch = handleSubmit(values => console.log('searching', values))
  return { searchText, sBlur, onSearch, clear: handleReset }
}
