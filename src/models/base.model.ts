export interface CommonObject<T, K> {
  keys<T>(id: T): K;
}
