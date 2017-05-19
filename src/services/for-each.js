import getItems from './get-items'
import replaceItems from './replace-items'

export default function (apply) {
  return function (hook) {
    const items = getItems(hook)

    if (Array.isArray(items)) {
      items.forEach(apply)
    } else {
      apply(items)
    }

    replaceItems(hook, items)
  }
}
