import {factorial, divide} from './utils'

export default (powA, channels) => {
  let sum = 0
  for (let i = 0; i <= channels; i++) {
    sum += divide(powA(i), factorial(i))
  }
  return sum
}

