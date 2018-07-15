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
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5];
//arr_1.push.apply(arr_1, arr_2);
//console.log(arr_1); //=> [1, 2, 3, 4, 5];
const foo = (a_1, a_2) => {
	for(const el of a_2) {
		if(!a_1.includes(el)){
			a_1.push(el);	
        }
	}
	console.log(a_1);
};

foo(arr_1, arr_2); //=> [1, 2, 3, 4, 5];
/////////////////////////////////////////////////////////////////////////
const arr = [{title: `first`, numb: [1, 2, 3]}, {title: `second`, numb: [4, 5]}, {title: `thirdt`, numb: [6, 7, 8]}];
const res = arr.reduce((accum, curr) => accum.concat(curr.numb), []);
console.log(res); //=> [1, 2, 3, 4, 5, 6, 7, 8]
/////////////////////////////////////////////
const arr = [{title: `first`, numb: [1, 2, 3]}, {title: `second`, numb: [4, 5]}, {title: `thirdt`, numb: [6, 7, 8]}];
const res = arr.reduce((accum, curr) => accum + curr.numb.reduce((a, b) => a + b), 0);
console.log(res); //=> 36
/////////////////////////////////////////////////
const arr = [[1, 2, 3], [4, 5], [6, 7, 8]];
const res = arr.reduce((prev, curr) => [...prev, ...curr]);
console.log(res); //=> [1, 2, 3, 4, 5, 6, 7, 8]
////////////////////////////////////////////////////////////////////////////////////
const arr = [[1, 2, 3], [4, 5], [6, 7, 8]];
const res = arr.reduce((prev, curr) => prev.concat(curr));
console.log(res); //=> [1, 2, 3, 4, 5, 6, 7, 8]
/////////////////////////////////////////////
const arr =[]