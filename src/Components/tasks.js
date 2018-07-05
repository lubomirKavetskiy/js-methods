function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

////////////////////////////////////////////
const foo = (arr, numb) => {
  let temp = [];
  for (let i = 0; i < arr.length; i += numb) {
    elem = arr.slice(i, i + numb);
    temp.push(elem);
  }
  return temp;
};

console.log(foo([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9], [10]]
/////////////////////////////////////////////
function chunkArray(myArray, chunk_size) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

// Розбиття на групи по 3 елементи
var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);
[[1, 2, 3], [4, 5, 6], [7, 8]];
//////////////////////////////////////////
https://codeguida.com/post/1405
//////////////////////////////////
//Checking whether a value exists using an arrow function
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'mango');   // true
////////////////////////////////////////////////
const fruits = ['apple', 'Banana', 'Pear', 'cherry'];
console.log(fruits.filter(fr => fr.toLowerCase().indexOf('r') > -1)); //["Pear","cherry"] 
///////////////////////////////////////////