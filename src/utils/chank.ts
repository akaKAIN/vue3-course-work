export function chank<T>(
  array: Array<T>,
  subArrayLength: number
): Array<Array<T>> {
  const resultArray: Array<Array<T>> = []
  let bufferArray: Array<T> = []
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
