import {
  divide,
  factorial,
  pow,
  round
} from './utils'
import summation from './summation'

export default (traffic, channels) => {
  const powA = pow(traffic)
  const roundTwo = round(2)

  return roundTwo(
          divide(
            divide(
              powA(channels),
              factorial(channels)),
            summation(powA, channels)))
}
