const sum =
  function (arr) {
    let result = arr.reduce(function (current, val) {
      return current += val
    }, 0)
    return result
  }

module.exports = {
  sum
}