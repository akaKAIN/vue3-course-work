import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Category, Product } from '@/models/base.model';

// Класс для отправки/получения сетевых запросов
export default class ApiService {
  axios: AxiosInstance;
  private _cartProducts = 'products/';
  private _categoryProducts = 'categories/';
  constructor() {
    this.axios = this.initAxios();
  }

  initAxios(): AxiosInstance {
    // Инициализация нового инстанса axios с базовой ссылкой
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    return axios.create({
      baseURL: process.env.VUE_APP_DB_URL,
      headers
    });
  }

  // Запрос на получение списка товаров в корзине
  async getCartProducts(): Promise<AxiosResponse<Product[]>> {
    console.log('get');
    return await this.axios.get(this._cartProducts);
  }

  // Запрос на получение списка категорий товаров
  async getCategoryProducts(): Promise<AxiosResponse<Category>> {
    return await this.axios.get(this._categoryProducts);
  }
}
