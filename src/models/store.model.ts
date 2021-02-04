import { CommonObject, Product } from '@/models/base.model';

export interface RootState {
  message: string | null;
}

export interface AuthState {
  token: string;
}

export interface CartState {
  products: Product[];
}

export interface Cart {
  products: CommonObject<string, number>;
}
