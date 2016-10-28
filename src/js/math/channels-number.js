import blockProbality from './block-probality'
import {round, getIndexForRound} from './utils'

export default function channelsNumber(bp, traffic, channels, calculedBp) {
  const roundByLength = round(getIndexForRound(bp.toString()))

  if (calculedBp !== 0 && roundByLength(calculedBp) <= roundByLength(bp)) {
    return {
      cn: channels,
      ot: traffic,
      bp: calculedBp
    }
  }
  const newBp = blockProbality(traffic, channels + 1)
  return channelsNumber(bp, traffic, channels + 1, newBp)
}
