const Load = function (src) {
  return new Promise(function (resolve, reject) {
    const img = new Image()
    const getResult = function (event) {
      if (event.type === 'load') {
        resolve(src)
      }
      else {
        resolve(false)
      }
    }
    img.onerror = getResult
    img.onload = getResult
    img.src = src
  })
}
export default Load

