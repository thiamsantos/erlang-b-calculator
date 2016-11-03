import test from 'tape'
import factorial from './factorial'

test('calculate factorial', t => {
  t.equal(factorial(4), 24)
  t.equal(factorial(0), 1)
  t.equal(factorial(1), 1)
  t.equal(factorial(2), 2)
  t.equal(factorial(3), 6)
  t.end()
})
