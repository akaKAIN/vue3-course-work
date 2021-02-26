import axios, { AxiosInstance, AxiosResponse } from 'axios'
import {
  LoginFormResponse,
  RegisterUserFormResponse,
  SubmitValues
} from '@/models/form.model'

export default class ApiAuthService {
  private readonly _API_KEY: string
  readonly userSignUpURL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp'
  readonly userSignInURL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword'
  axios: AxiosInstance
  constructor() {
    this._API_KEY = process.env.VUE_APP_API_KEY
    this.axios = this.initAxios()
  }

  private getApiKey(): string {
    return this._API_KEY
  }

  initAxios(): AxiosInstance {
    return axios.create()
  }

  createUser(
    data: SubmitValues
  ): Promise<AxiosResponse<RegisterUserFormResponse>> {
    return this.axios.post(
      `${this.userSignUpURL}?key=${this.getApiKey()}`,
      data
    )
  }

  loginUser(data: SubmitValues): Promise<AxiosResponse<LoginFormResponse>> {
    return this.axios.post(
      `${this.userSignInURL}?key=${this.getApiKey()}`,
      data
    )
  }
}
