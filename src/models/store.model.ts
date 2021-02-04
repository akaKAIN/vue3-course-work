import { CommonObject, Product } from '@/models/base.model';

export interface RootState {
  message: string | null;
}

export interface AuthState {
  token: string;
}

export interface ProductState {
  products: Product[];
}

export interface CartState {
  cart: CommonObject<string>;
}
