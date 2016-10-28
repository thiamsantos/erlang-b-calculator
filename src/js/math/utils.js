export const pow = x => y => Math.pow(x, y)

export const percent = n => n / 100

export const factorial = n => {
  let acc = 1
  for (let i = 2; i <= n; i++) {
    acc *= i
  }
  return acc
}

export const divide = (a, b) => (b === 0) ? 0 : a / b

export const round = alg => n => Number(Math.round(n + 'e' + alg) + 'e-' + alg)

export const getIndexForRound = str => {
  const indexOfDot = str.indexOf('.')
  if (indexOfDot !== -1) {
    return str.slice(indexOfDot + 1).length
  }
  return 0
}
