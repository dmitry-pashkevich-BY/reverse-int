module.exports = function reverse (n) {
  n = String(n).split('').filter(el => el !== '-').reverse().join('');
  return Number(n);
}
