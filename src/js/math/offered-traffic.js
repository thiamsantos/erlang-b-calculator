import blockProbality from './block-probality'
import {round} from './utils'

export default function offeredTraffic(bp, traffic, channels, calculedBp) {
  if (calculedBp !== 0 && calculedBp >= bp) {
    return {
      cn: channels,
      ot: round(2)(traffic),
      bp: calculedBp
    }
  }
  const newBp = blockProbality(traffic + 0.05, channels)
  return offeredTraffic(bp, traffic + 0.05, channels, newBp)
}
