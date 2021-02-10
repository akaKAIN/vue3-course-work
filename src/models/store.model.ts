import { Category, CommonObject, Product } from '@/models/base.model'

export interface RootState {
  message: string | null
  isModalVisible: boolean
}

export interface AuthState {
  token: string
}

export interface ProductState {
  products: Product[]
  categories: Category[]
}

export interface CartState {
  cart: CommonObject<number>
}
