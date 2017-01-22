function countdown(callback) {
  return window.setTimeout(callback, 2000)
}

function createMultiplier(number) {
  return function(value) {
    return value * number
  }
}

var doubler = createMultiplier(2)
var tripler = createMultipler(3)

function multiplier(value1, value2){
  return value1 * value2
 }

 var doublerWithBind = multiplier.bind(null, 2)
 var triplerWithBind = multiplier.bind(null, 3)
