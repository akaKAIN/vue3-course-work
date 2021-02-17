import { IdentifiedObject, Unformatted } from '@/models/base.model'

export function formatResponseElem<T, K extends IdentifiedObject & T>(
  data: Unformatted<T>
): K[] {
  const result: K[] = []
  try {
    if (data) {
      Object.keys(data).forEach((key: string) => {
        const idObj: IdentifiedObject = { id: key }
        result.push({ ...idObj, ...data[key] } as K)
      })
    }
  } catch (err) {
    console.error(err)
  }

  return result
}
