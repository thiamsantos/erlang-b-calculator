import blockProbality from './block-probality'
import {round} from './round'

export default function offeredTraffic(bp, traffic, channels, calculedBp) {
  if (calculedBp !== 0 && calculedBp >= bp) {
    return {
      channels,
      traffic: round(2)(traffic),
      bp: calculedBp
    }
  }
  const newBp = blockProbality(traffic + 0.05, channels)
  return offeredTraffic(bp, traffic + 0.05, channels, newBp)
}
