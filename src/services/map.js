import getItems from './get-items'
import replaceItems from './replace-items'

export default function (apply) {
  return function (hook) {
    const items = getItems(hook)

    replaceItems(hook, Array.isArray(items) ? input.map(items) : apply(items))
  }
}
