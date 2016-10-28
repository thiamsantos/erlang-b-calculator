import test from 'tape'
import blockProbality from './block-probality'

test('Block Probality', t => {
  const actual = blockProbality(2, 3)
  const expected = 0.21

  t.equal(actual, expected, 'calculate the proper block probality')
  t.end()
})
