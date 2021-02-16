// Преобразование переданного массива на массив с подмассивами заданной величины
export function chunk<T>(
  array: Array<T>,
  subArrayLength: number
): Array<Array<T>> {
  const resultArray: Array<Array<T>> = []
  let bufferArray: Array<T> = []

  // Если выполняется переданное условие, буфферный массив
  // копирует себя и "пушит" в результирующий массив. После обнуляется.
  const pushToResult = (isReady: boolean) => {
    if (isReady) {
      resultArray.push(bufferArray.slice())
      bufferArray = []
    }
  }
  array.forEach((item: T) => {
    bufferArray.push(item)
    pushToResult(bufferArray.length === subArrayLength)
  })

  pushToResult(bufferArray.length > 0)
  return resultArray
}
