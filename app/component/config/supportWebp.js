const isSupportWebp = function () {
  return new Promise(function (resolve, reject) {
    const img = new Image()
    const getResult = function (event) {
      const res = event && event.type === 'load' ? img.width === 1 : false
      resolve(res)
    }
    img.onerror = getResult
    img.onload = getResult
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
  })
}
export default isSupportWebp
