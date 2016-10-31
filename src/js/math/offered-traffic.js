import blockProbality from './block-probality'
import {round} from './utils'

export default function offeredTraffic(bp, channels) {
  let traffic = 0.05
  let calculedBp = 0
  while (blockProbality(traffic, channels) > bp) {
    calculedBp = blockProbality(traffic, channels)
    traffic += 0.05
  }
/*  let calculedBp
  for (var i = 0.05; blockProbality(i, channels) < bp; i + 0.05) {
    console.log(i)
    calculedBp = blockProbality(i, channels)
  }*/

  return {
    cn: channels,
    ot: round(2)(1),
    bp: calculedBp
  }
}
