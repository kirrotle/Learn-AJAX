const indexHtml = 'https://www.google.com/'
const sum =
  function (arr) {
    let result = arr.reduce(function (current, val) {
      return current += val
    }, 0)
    return result
  }

export default {
  index: indexHtml,
  sumFun: sum
}