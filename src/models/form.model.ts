export interface LoginForm {
  email: string
  password: string
}

export type SubmitCallback = (value: Record<string, string | number>) => void
