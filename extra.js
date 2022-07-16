/*
function myFunction(a, n) {
  return a[n - 1];
}
console.log(myFunction('abcd', 1));
*/

/*
function myFunction2(a, b) {
  console.log(typeof a);
  return a === b ? true : false;
}
console.log(myFunction2(3, 3));
*/

/*
function myFunction(a, b) {
  return a.hasOwnProperty(b);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z'));
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'));
*/

/*
function myFunction(str) {
  return str.substr(-3);
}
console.log(myFunction('abcdefg'));
*/

/*
function myFunction(obj) {
  return obj?.country;
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
*/

/*
function myFunction(obj, key) {
  return obj[key];
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }, 'continent'));
*/

/*
function myFunction(a) {
  let test = a.split('');
  test.splice(-3);
  return test.join('');
}
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
*/

/*
function myFunction(a) {
  return a.slice(0, a.length / 2);
}
console.log(myFunction('abcdefgh'));
console.log(myFunction('1234'));
*/

/*
function myFunction(set, val) {
  return [...set].includes(val);
}
console.log('set', myFunction(new Set([1, 2, 3]), 2));
*/

/*
function myFunction(a) {
  a.splice(0, 3);
  return a;
}
console.log(myFunction([1, 2, 3, 4]));
*/

/*
function myFunction(a, b) {
  if (a.hasOwnProperty(b) && a[b]) return true;
  return false;
}
console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z'));
*/

/*
function myFunction(a) {
  let negative = 0;
  a.forEach(e => {
    if (e < 0) negative++;
  });
  return negative;
}
console.log(myFunction([1, -2, 2, -4]));
*/
