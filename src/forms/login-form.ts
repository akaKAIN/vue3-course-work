import { ref } from 'vue'

export function loginForm() {
  const form = ref<string>('')
  return { form }
}
