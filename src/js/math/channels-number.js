import blockProbality from './block-probality'
import {round, getIndexForRound} from './utils'

export default function channelsNumber(bp, traffic) {
  const roundByLength = round(getIndexForRound(bp.toString()))
  let channels = 0
  let calculedBp = 0

  while (calculedBp === 0 || roundByLength(calculedBp) >= roundByLength(bp)) {
    console.log(channels, calculedBp)
    channels += 1
    calculedBp = blockProbality(traffic, channels)
  }

  return {
    cn: channels,
    ot: traffic,
    bp: calculedBp
  }
}
