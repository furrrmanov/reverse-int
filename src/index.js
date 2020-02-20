module.exports = function reverse (n) {
  return n<0?Number(n.toString().split('').reverse().join('').slice(0,-1)) :Number(n.toString().split('').reverse().join(''))
}
