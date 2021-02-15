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

export type MessageLevels = 'primary' | 'warming' | 'danger'

export interface MessageObject {
  title: string
  text: string
  level: MessageLevels
}

export enum EnumModalTitle {
  'default' = 'default',
  'create-category' = 'Создать категорию',
  'edit-category' = 'Редактировать категорию',
  'delete-category' = 'Удалить категорию'
}

export type TitleKeys =
  | 'default'
  | 'create-category'
  | 'edit-category'
  | 'delete-category'
