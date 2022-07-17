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

/*
const button = document.querySelector('#wrapper button');

const changeInput = () => {
  const input = document.querySelector('#inputEl');
  if (input) {
    input.value = 'Hello World';
  }
};

button.addEventListener('click', changeInput);

document.querySelector('#wrapper input').setAttribute('id', 'inputEl');
*/

/*
const listItems = [...document.querySelectorAll('#list li')].filter(
  el => !el.id
);
const button = document.getElementById('button');

const handleClick = () => {
  listItems.forEach(item => {
    const oldText = item.innerText;
    return (item.innerText = oldText === 'ON' ? 'OFF' : 'ON');
  });
};
if (listItems.length > 1) {
  button.addEventListener('click', handleClick);
}
*/

/*
const element = document.querySelector('#element');

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? 'orange' : 'black';
};

// type in your code here
element.addEventListener('mouseenter',  toggleColor(true))
element.addEventListener('mouseleave', toggleColor(false))
*/

//=== add todo item in last  ===//
/*
const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here
  const todoItem = document.getElementById('input').value;
  todoItem &&
    document
      .getElementById('list')
      .insertAdjacentHTML('beforeend', `<li>${todoItem}</li>`);
});
*/

//=== drag and drop  ===//
/*
 const dragItem = document.querySelector('#dragItem');
  const dropArea = document.querySelector('#dropArea');
  
  const handleDragOver = (event) => event.preventDefault();
  dropArea.addEventListener('dragover', handleDragOver);
  
  const handleDrop = () => {
    dropArea.append(dragItem);
  };
  
  dropArea.addEventListener("drop",handleDrop);
  */

//=== wrap an element with a newly created parent element  ===//
/*
  
  const button = document.querySelector('#button');
  
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  button.parentNode.append(wrapper);
  wrapper.append(button);
  
  const btn = document.querySelector('#wrapper btn');
  
  if(btn) {
    const handleClick = () => {
      btn.innerText = 'Thank you! ❤️'
    }
  
    btn.addEventListener('click', handleClick)
  }
  */

//=== checkbox checked by button click  ===//
/*
const button = document.getElementById('button');
button.addEventListener('click', () => {
  const check = (document.getElementById('checkbox').checked = true);
});
*/

/*
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}

console.log(myFunction('cheese', 'cake'));
console.log(myFunction('lips', 's'));
*/

/*
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(3);
}
console.log(myFunction('abcdefg'));
*/

/*
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunction(a) {
  return a.slice(-3);
}
console.log(myFunction([1, 2, 3, 4]));
*/

/*
// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {
  return Object.keys(a);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
*/

/*
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}
console.log(myFunction(10, 100));
*/

/*
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
  return a.getTime() < b.getTime();
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
*/

/*
// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction(a, b) {
  return a.filter((i) => i !== b);
}

console.log(myFunction([1, 2, 3], 2));
*/

/*
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function myFunction(set) {
  return [...set];
}
console.log(myFunction(new Set([1, 2, 3])));
*/

/*
// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
  return a.reduce((prev, cur) => prev + cur, 0);
}
console.log(myFunction([10, 100, 40])); // 150
*/

/*
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n) {
  return a.slice(-n);
}
console.log(myFunction([1, 2, 3, 4, 5], 2));
*/

/*
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
  //=== long way  ===//
  // let one = a + b;
  // let two = one - c;
  // let three = two * d;
  // let four = three / e;
  // return four ** f;

  //=== short way  ===//
  return (((a + b - c) * d) / e) ** f;
}

console.log(myFunction(6, 5, 4, 3, 2, 1));
console.log(myFunction(6, 2, 1, 4, 2, 3));
*/

/*
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function myFunction(set, val) {
  set.has(val) && set.delete(val);
  return set;
}
console.log(myFunction(new Set([1, 2, 3]), 1)); // new Set([2, 3])
*/

/*
// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
  return Object.values(a).reduce((prev, cur) => prev + cur, 0);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
*/

/*
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b) {
  return (a / 100) * b;
}
console.log(myFunction(100, 50));
*/

/*
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b) {
  return { [a]: b };
}
console.log(myFunction("a", "b")); // {a:'b'}
*/

/*
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a) {
  return a % 2 === 0;
}
console.log(myFunction(11));
*/

/*
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
}
console.log(myFunction([10, 100, 40])); // 50
*/

/*
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function myFunction(obj) {
  return obj["prop-2"];
}
console.log(myFunction({ one: 1, "prop-2": 2 })); // 2
*/

/*
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function myFunction(obj) {
  // const newObj = obj;
  // delete newObj?.b;
  // return newObj;

  const { b, ...rest } = obj;
  console.log(b, rest);
  return rest;
}
console.log(myFunction({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
*/

/*
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction(a, b, c) {
  return new Set([a, b, c]);
}
console.log(myFunction(1, "b", 3)); // new Set([1, 'b', 3])
*/

/*
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(myFunction([1, 3, 2])); // [3,2,1]
*/

/*
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {
  return Number.isInteger(a);
}
console.log(myFunction(4.3)); //
*/

/*
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  // let counter = 0;
  // for (let i = 0; i < b.length; i++) {
  //   b[i] == a && counter++;
  // }
  // return counter;

  return b.split(a).length - 1;
}
console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
*/

/*
// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
  // let wordToReturn = "";
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length > wordToReturn.length) {
  //     wordToReturn = arr[i];
  //   }
  // }
  // return wordToReturn;

  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}
console.log(myFunction(["help", "me"]));
*/

/*
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(alphabet[alphabet.indexOf(str[i]) + 1]);
  }
  return arr.join("");
}
console.log(myFunction("bnchmf")); // 'coding'
console.log(myFunction("bgddrd"));
*/

/*
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a) {
  return +a.toFixed(2);
}
console.log(myFunction(2.12397));
*/

/*
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  return a.filter((n) => n > b).reduce((prev, curr) => prev + curr, 0);
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
*/

/*
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays) {
  return [...arrays].flat(Infinity);
}
console.log(myFunction([1, 2, 3], [4, 5, 6]));
*/

/*
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a, b) {
  const obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
}
console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
*/

/*
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  return String(a).split("").map((n) => +n);
}
console.log(myFunction(10));
*/
