export const indexHtml = 'https://www.google.com/'
export const sum =
  function (arr) {
    let result = arr.reduce(function (current, val) {
      return current += val
    }, 0)
    return result
  }