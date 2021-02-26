// Базовая форма данных для логина пользователя
export interface LoginForm {
  email: string
  password: string
}

// Формат данных для проходения регистрации прользователя в FB
export interface LoginData extends LoginForm {
  returnSecureToken: string
}

// Формат данных приходящих в ответ на проверку авторизации
export interface LoginFormResponse extends RegisterUserFormResponse {
  registered: boolean
}

// Формат ответа от сервера при регистрации нового пользователя в базе
export interface RegisterUserFormResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

// Тип данных для аргументов, передаваемых в функцию-callback для отправки формы
export type SubmitValues = Record<string, string | number | boolean>

// Тип данных функции-callback, передаваемой для отправки формы
export type SubmitCallback = (value: Record<string, string | number>) => void
