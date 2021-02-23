exports.min = function min(array) {
  if (Array.isArray(array) && array.length) {
    array.sort((a, b) => a - b)
    return array[0]
  } else {
    return 0
  }
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        array.sort((a, b) => a - b)
        return array[array.length - 1]
      } else {
        return 0
      }
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length) {
        let sum=0
        for (i=0; i<array.length; i++){
    sum+=array[i]
        }
        return sum/array.length
      } else {
        return 0
      }
}
