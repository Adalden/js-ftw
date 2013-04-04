var arr = [4, 9, 1, 2, 3, 'bubba'];
console.log(arr);

arr.sort();
console.log(arr);

arr.sort(function (a, b) {
  if (a < b) return 1;
  return -1;
});
console.log(arr);

Array.prototype.eachNum = function (fn) {
  for (var i = 0; i < this.length; ++i) {
    if (typeof this[i] === 'number')
      this[i] = fn(this[i]);
  }
};

arr.eachNum(function (a) {
  return a * a;
});
console.log(arr);

[1, 2, { foo: 'bar' }, 3].eachNum(function (a) {
  console.log('my num is ' + a);
});
