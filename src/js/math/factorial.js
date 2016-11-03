const cache = {}

export default n => {
  if (n === 1) {
    return 1
  } else if (cache[n]) {
    return cache[n]
  }

  let acc = 1
  for (let i = 2; i <= n; i++) {
    acc *= i
  }
  cache[n] = acc
  return acc
}
