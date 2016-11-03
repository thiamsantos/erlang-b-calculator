import blockProbality from './math/block-probality'
import offeredTraffic from './math/offered-traffic'
import channelsNumber from './math/channels-number'

export default (unknownValue, params) => {
  if (unknownValue === 'bp') {
    return blockProbality(params.ot, params.cn)
  } else if (unknownValue === 'ot') {
    return offeredTraffic(params.bp, params.cn)
  } else if (unknownValue === 'cn') {
    return channelsNumber(params.bp, params.cn)
  }
}
