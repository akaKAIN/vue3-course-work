export interface CommonObject<K> {
  [id: string]: K
}

// Вероятно излишний тип (можно заменить на string)
export type CategoryProduct =
  | 'fruit'
  | 'vegetable'
  | 'meat'
  | 'fish'
  | 'greens'
  | 'berries'

export interface Product {
  id: string
  count: number
  title: string
  category: CategoryProduct // or string
  price: number
  img: string
}

export interface Category {
  id: string
  title: string
  type: CategoryProduct // or string
}

export interface IdentifiedObject {
  id?: string
}
