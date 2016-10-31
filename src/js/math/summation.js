import {divide} from './utils'
import factorial from './factorial'

export default (powA, channels) => {
  let sum = 0
  for (let i = 0; i <= channels; i++) {
    sum += divide(powA(i), factorial(i))
  }
  return sum
}

