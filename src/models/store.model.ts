import { CommonObject } from '@/models/base.model';

export interface RootState {
  message: string | null;
}

export interface AuthState {
  token: string;
}

export interface Cart {
  products: CommonObject<string, number>;
}
