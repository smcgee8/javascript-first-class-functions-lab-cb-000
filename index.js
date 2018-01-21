function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(input) {return input * multiplierValue;}
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(input, multiplierValue) {

}

var doublerWithBind =
var triplerWithBind = 
