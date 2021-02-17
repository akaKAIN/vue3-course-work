export interface IdentifiedObjectOptional {
  id?: string
}

export interface IdentifiedObject {
  id: string
}

export interface CommonObject<K> {
  [id: string]: K
}

export interface Unformatted<T> {
  [key: string]: T
}

// Вероятно излишний тип (можно заменить на string)
export type CategoryProduct =
  | 'fruit'
  | 'vegetable'
  | 'meat'
  | 'fish'
  | 'greens'
  | 'berries'

export interface BaseProduct {
  count: number
  title: string
  category: CategoryProduct // or string
  price: number
  img: string
}

export interface BaseCategory {
  title: string
  type: CategoryProduct // or string
}

export interface Product extends BaseProduct, IdentifiedObject {}

export interface Category extends BaseCategory, IdentifiedObject {}

export interface CreationResponse {
  name: string
}

export type MessageLevels = 'primary' | 'warming' | 'danger'

export interface MessageObject {
  title: string
  text: string
  level: MessageLevels
}

export enum EnumModalTitle {
  'default' = 'default',
  'create' = 'Создать',
  'edit' = 'Редактировать',
  'delete' = 'Удалить'
}

export type TitleKeys = 'default' | 'create' | 'edit' | 'delete'
