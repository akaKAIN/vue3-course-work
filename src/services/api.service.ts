import axios, { AxiosInstance, AxiosResponse } from 'axios'
import {
  BaseCategory,
  BaseProduct,
  Category,
  CreationResponse,
  Product,
  Unformatted
} from '@/models/base.model'

// Класс для отправки/получения сетевых запросов
export default class ApiService {
  axios: AxiosInstance
  private _products = 'products.json'
  private _categories = 'categories.json'
  constructor() {
    this.axios = this.initAxios()
  }

  initAxios(): AxiosInstance {
    // Инициализация нового инстанса axios с базовой ссылкой
    return axios.create({
      baseURL: process.env.VUE_APP_DB_URL
    })
  }

  // Запрос на получение списка товаров в корзине
  async getProducts(): Promise<AxiosResponse<Unformatted<BaseProduct>>> {
    return await this.axios.get(this._products)
  }

  // Запрос на получение списка категорий товаров
  async getCategoryProducts(): Promise<
    AxiosResponse<Unformatted<BaseCategory>>
  > {
    return await this.axios.get(this._categories)
  }

  // Создание новой категории
  async createCategory(
    category: Category
  ): Promise<AxiosResponse<CreationResponse>> {
    return await this.axios.post(this._categories, category)
  }

  // Создание нового продукта
  async createProduct(
    product: Product
  ): Promise<AxiosResponse<CreationResponse>> {
    return await this.axios.post(this._products, product)
  }
}
