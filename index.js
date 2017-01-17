function iterativeLog(array) {
  array.forEach(function(el, i, ar) {
    console.log(`${i}: ${el}`)
  });

}

function iterate(callback) {
  hellArray = ["hello", "goodbye"]
  hellArray.forEach(callback)
  return hellArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
