const createId = () => {
  let counter = 1;
  return () => counter++;
};

const returnId = createId();

export const data = [
  {
    title: `Array.from()`,
    description: `The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.`,
    example: [
      `let str = 'string';`,
      `const arr = Array.from(str);`,
      `console.log(arr); //["s","t","r","i","n","g"]`,
      `str = 'new';`,
      `console.log(arr); //["s","t","r","i","n","g"]`,
      `const num = [1,2,3];`,
      `console.log(Array.from(num, n => n*2)); //[2,4,6]`,
      `**console.log(Array.from(str).reverse().join("")); // wen`,
      `**console.log(Array.from(100)); //[]`,
      `**console.log(Array.from(1, 2, 3)); //error`,
    ],
  },

  {
    title: `Array.isArray()`,
    description: `The Array.isArray() method determines whether the passed value is an Array.`,
    example: [
      `return true:`,
      `Array.isArray([]);`,
      `Array.isArray([1]);`,
      `Array.isArray(new Array());`,
      `// Маловідомий факт type сам є масивом:`,
      `Array.isArray(Array.prototype);`,
      `======================`,
      `return false:`,
      `Array.isArray();`,
      `Array.isArray({});`,
      `Array.isArray(null);`,
      `Array.isArray(undefined);`,
      `Array.isArray(17);`,
      `Array.isArray('Array');`,
      `Array.isArray(true);`,
      `Array.isArray(false);`,
      `Array.isArray({ __proto__: Array.prototype });`,
      `======================`,
      `(function() {`,
      `  // виводить false`,
      `  console.log(Array.isArray(arguments));`,
      `})();`,
    ],
  },

  {
    title: `Array.of()`,
    description: `The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.`,
    example: [
      `console.log(Array.of('string')); //["string"]`,
      `console.log(Array.of(1,2,3)); //[1, 2, 3]`,
      `console.log(Array(3));//[null, null, null]`,
      `console.log(Array(1,2,3)); //[1, 2, 3]`,
    ],
  },

  {
    title: `Array.prototype.concat()`,
    description: `The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.`,
    example: [
      `const target = [1, 2, 3];`,
      `const src_1 = [5, [6]];`,
      `const newArr = target.concat(src_1);`,
      `console.log(newArr); //[1, 2, 3, 5, [6]] `,
      `// Doesn't change target`,
      `console.log(target); //[1, 2, 3] `,
      `// But retentions the reference `,
      `// not `,
      `src_1[0] = 100; `,
      `console.log(src_1); // [100, [6]]  `,
      `console.log(newArr); // [1, 2, 3, 5, [6]] `,
      `// has`,
      `src_1[1].push(4);`,
      `console.log(src_1); // [100, [6, 4]] `,
      `console.log(newArr); //[1, 2, 3, 5, [6, 4]] `,
      `let str = 'string';`,
      `console.log(newArr.concat(str)); //[1, 2, 3, 5, [6, 4], 'string']`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.copyWithin()`,
    description: `The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.`,
    example: [
      `const target = [0, 1, 2, 3];`,
      `console.log(target.copyWithin(2, 1)); //[0, 1, 1, 2]`,
      `console.log(target); //[0, 1, 1, 2]`,
      `copyWithin(where to paste, from copy, to copy)`,
      `** keeps previous length of array`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.entries()`,
    description: `The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.`,
    example: [
      `const arr = [5, 7, 9];`,
      `console.log(arr.entries()); // Array Iterator { }`,
      `//console.log(Array.from(arr.entries())); // [[0, 5], [1, 7], [2, 9]]`,
      `for (let val of arr.entries()) {console.log(val)}; // [0, 5] [1, 7] [2, 9]`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.every()`,
    description: `The every() method tests whether all elements in the array pass the test implemented by the provided function.`,
    example: [
      `const arr = [5, 10, 15];`,
      `console.log(arr.every(e => e % 5 === 0)); //true`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.fill()`,
    description: `The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.`,
    example: [
      `const arr = [0, 1, 2, 3, 4, 5];`,
      `console.log(arr.fill(100)); //[100,100,100,100,100,100]`,
      `const arr = [0, 1, 2, 3, 4, 5];`,
      `console.log(arr.fill(9, 3)); //[0,1,2,9,9,9]`,
      `const arr = [0, 1, 2, 3, 4, 5];`,
      `console.log(arr.fill(9, 2, 4)); //[0,1,9,9,4,5] `,
      `fill(what paste, from index, to index)`,
      `** keeps previous length of array`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.filter()`,
    description: `The filter() method creates a new array with all elements that pass the test implemented by the provided function.`,
    example: [
      `const numbers = [5, 12, 3, -2];`,
      `console.log(numbers.filter(n => n < 5)); //[3, -2]`,
      `const fruits = ['apple', 'Banana', 'Pear', 'cherry'];`,
      `console.log(fruits.filter(fr => fr.toLowerCase().indexOf('r') > -1)); //["Pear","cherry"] `,
      `** always return array (with elements if executes condition, or empty if doesn't)`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.find()`,
    description: `The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.`,
    example: [
      `const numbers = [5, 12, 3, -2];`,
      `console.log(numbers.find(n => n < 5)); //3`,
      `const fruits = ['apple', 'Banana', 'Pear', 'cherry'];`,
      `console.log(fruits.find(fr => fr.toLowerCase().indexOf('r') > -1)); //"Pear"`,
      `**return the first element in array that executes condition (doesn't return array) or undefined`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.findIndex()`,
    description: `The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.`,
    example: [
      `const numbers = [5, [12], [3], -2];`,
      `console.log(numbers.findIndex(n => Array.isArray(n))); //1`,
      `console.log(numbers.findIndex(n => n%4 === 0)); //1`,
      `console.log(numbers.findIndex(n => n == 3)); //2`,
      `console.log(numbers.findIndex(n => n > 12)); //-1`,
      `**return the index of the first element in array that executes condition (doesn't return array) or -1`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.forEach()`,
    description: `The forEach() method executes a provided function once for each array element.`,
    example: [
      `[1,2,3].forEach((el, ind, arr) => {`,
      'console.log(`el: ${el} index: ${ind} array: ${arr}`);',
      `}); //el: 1 index: 0 array: 1,2,3 el: 2 index: 1 array: 1,2,3 el: 3 index: 2 array: 1,2,3`,
      `**always returns 'undefined'`,
      `**arr.forEach(item, index, currArray)`,
      `**go on to work with return`,
      `[1,2,3,4,5].forEach(function(el) {`,
      `if(el > 3) {return true;}`,
      `console.log(el);`,
      `return false; // return який міг би переривати цикл`,
      `}); //1 2 3`,
      `** const foo = () => {`,
      `for(let i=0; i<a.length; i++){`,
      `if(a[i] > 3){return true}`,
      `console.log(a[i]);`,
      `return false; // return який перериває цикл,`,
      `};`,
      `};`,
      `foo(); //1 false`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.includes()`,
    description: `The includes() method determines whether an array includes a certain element, returning true or false as appropriate. It uses the sameValueZero algorithm to determine whether the given element is found.`,
    example: [
      `console.log([1,2,3].includes(3)); //true`,
      `** array.includes(searchEl, fromPosition)`,
      `** returns boolean`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.indexOf()`,
    description: `The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.`,
    example: [
      `console.log([1,2,3].indexOf(3)); // 2`,
      `console.log([1,2,3].indexOf(2, 1)); //1`,
      `** arr.indexOf(searchElement[, fromIndex])`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.join()`,
    description: `The join() method joins all elements of an array (or an array-like object) into a string and returns this string.`,
    example: [
      `console.log(['abc', 'def', 'ghi'].join('')); //abcdefghi`,
      `console.log(['abc', 'def', 'ghi'].join(' ')); //abc def ghi`,
      `console.log(['abc', 'def', 'ghi'].join('***')); //abc***def***ghi`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.keys()`,
    description: `The keys() method returns a new Array Iterator object that contains the keys for each index in the array.`,
    example: [
      `console.log(Array.from([1,2,3].keys())); //[0, 1, 2]`,
      `console.log([...[1,2,3].keys()]); //[0, 1, 2]`,
      `** return Array Iterator`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.lastIndexOf()`,
    description: `The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.`,
    example: [
      `console.log([1,2,3,2].lastIndexOf(2)); // 3`,
      `console.log([1,2,3,2].lastIndexOf(2, 3)); // 3`,
      `console.log([1,2,3,2].lastIndexOf(5)); // -1`,
      `** arr.lastIndexOf(searchElement, fromIndex)`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.map()`,
    description: `The map() method creates a new array with the results of calling a provided function on every element in the calling array.`,
    example: [
      `console.log([1,2,3].map(el => el*3)); [3, 6, 9]`,
      `** return new array`,
      `** array.map(el, index, arr)`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.pop()`,
    description: `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.`,
    example: [
      `const arr = [1,2,3];`,
      `const n = arr.pop();`,
      `console.log(n); //3`,
      `console.log(arr); //[1, 2]`,
      `** return element`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.push()`,
    description: `The push() method adds one or more elements to the end of an array and returns the new length of the array.`,
    example: [
      `const arr = [1, 2, 3];`,
      `console.log(arr.push([4,5])); // 4`,
      `console.log(arr); // [1, 2, 3, Array(2)]`,
      `const a = [1, 2, 3];`,
      `console.log(Array.prototype.push.apply(a, [4, 5])); // 5`,
      `console.log(a); // [1, 2, 3, 4, 5]`,
      `console.log([...[1, 2, 3], ...[4, 5]]); // [1, 2, 3, 4, 5]`,
      `** return the length of new element`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.reduce()`,
    description: `The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.`,
    example: [
      `arr.reduce(callback(accumulator, currentValue, indexOfCurrentValue, array), initialValue)`,
      `arr.reduce(callback(prev, cur, indexOfCur, array))`,
      `console.log([1, 2, 3]].reduce((prev, curr) => prev + curr)); // 6`,
      `console.log([1, 2, 3].reduce((total, curr) => total + curr); // 6`,
      `console.log([1, 2, 3].reduce((accum, curr) => accum + curr, 10)); // 16`,
      `console.log([[1, 2], [3, 4]].reduce((prev, curr) => prev.concat(curr))); // [1, 2, 3, 4]`,
      `console.log([[1, 2], [3, 4]].reduce((accum, curr) => [...accum, ...curr], [])); // [1, 2, 3, 4]`,
      `/*console.log([1, 2, 3].reduce((prev, curr) => (prev > curr) ? prev : curr));*/ // 3`,
      `console.log([1, 2, 3].reduce((max, curr) => (curr > max) ? curr : max)); // 3`,
      `/*console.log([1, 2, 3].reduce((prev, curr) => (prev < curr) ? prev : curr));*/ // 1`,
      `console.log([1, 2, 3].reduce((min, curr) => (curr < min) ? curr : min)); // 1`,
      `** return the value of result of callback;`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.reduceRight()`,
    description: `The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.`,
    example: [
      `arr.reduce(callback(accumulator, currentValue, indexOfCurrentValue, array), initialValue)`,
      `arr.reduce(callback(prev, cur, indexOfCur, array))`,
      `console.log([1, 2, 3]].reduceRight((prev, curr) => prev + curr)); // 6`,
      `console.log([1, 2, 3].reduceRight((total, curr) => total + curr); // 6`,
      `console.log([1, 2, 3].reduceRight((accum, curr) => accum + curr, 10)); // 16`,
      `console.log([[1, 2], [3, 4]].reduceRight((prev, curr) => prev.concat(curr))); // [3, 4, 1, 2]`,
      `console.log([[1, 2], [3, 4]].reduceRight((accum, curr) => [...accum, ...curr], [])); // [3, 4, 1, 2]`,
      `/*console.log([1, 2, 3].reduceRight((prev, curr) => (prev > curr) ? prev : curr));*/ // 3`,
      `console.log([1, 2, 3].reduceRight((max, curr) => (curr > max) ? curr : max)); // 3`,
      `/*console.log([1, 2, 3].reduceRight((prev, curr) => (prev < curr) ? prev : curr));*/ // 1`,
      `console.log([1, 2, 3].reduceRight((min, curr) => (curr < min) ? curr : min)); // 1`,
      `** return the value of result of callback;`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.reverse()`,
    description: `The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.`,
    example: [
      `const arr =[1, 2, 3]`,
      `const n = arr.reverse();`,
      `console.log(arr); // [3, 2, 1]`,
      `console.log(n); // [3, 2, 1]`,
      `arr[3] = 4;`,
      `console.log(arr); // [3, 2, 1, 4]`,
      `console.log(n); // [3, 2, 1, 4]`,
      `** return changed array`,
      `** retentions the reference `,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.shift()`,
    description: `The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.`,
    example: [
      `const arr =[1, [2]]`,
      `const n = arr.shift();`,
      `console.log(arr); // [[2]]`,
      `console.log(n); // 1`,
      `** return the first value`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.slice()`,
    description: `The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.`,
    example: [
      `const a = [0, 1, 2, 3, 4, 5];`,
      `const n = a.slice(1, 5);`,
      `console.log(n) // [1, 2, 3, 4]`,
      `console.log(a.slice(-1)) // [5]`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.some()`,
    description: `The some() method tests whether at least one element in the array passes the test implemented by the provided function.`,
    example: [
      `console.log([1, 2, 3].some(el => el > 2)); // true`,
      `console.log([1, 2, 3].some(el => el === 4 )); // false`,
      `** return true or false`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.sort()`,
    description: `The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.`,
    example: [
      `sort value:`,
      `const a = [1, 2, 21, -2, 100, 30, 4, 0];`,
      `console.log(a.sort((a, b) => a -b)); //  [-2, 0, 1, 2, 4, 21, 30, 100]`,
      `sort letter:`,
      `const arrStr = ['def', 'abc', 'jhk'];`,
      `console.log(arrStr.sort((a, b) => b.localeCompare(b))); // ["abc", "def", "jhk"]`,
      `console.log(arrStr.sort((a, b) => b.localCompare(a))); // ['def', 'abc', 'jhk']`,
      `** return the sorted arra`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.splice()`,
    description: `The splice() method changes the contents of an array by removing existing elements and/or adding new elements.`,
    example: [
      `sort value:`,
      `const arr = [0, 1, 2, 3, 4, 5];`,
      `const n = arr.splice(0);`,
      `console.log(arr);`,
      `console.log(n); // []`,
      `const arr_2 = [0, 1, 2, 3, 4, 5];`,
      `const n_2 = arr_2.splice(2, 2);`,
      `console.log(arr_2); // [0, 1, 4, 5]`,
      `console.log(n_2); // [2, 3]`,
      `const arr_3 = [0, 1, 2, 3, 4, 5];`,
      `const n_3 = arr_3.splice(3, 0, 100);`,
      `console.log(arr_3); // [0, 1, 2, 100, 3, 4, 5]`,
      `console.log(n_3); // []`,
      `const arr_4 = [0, 1, 2, 3, 4, 5];`,
      `const n_4 = arr_4.splice(-3, 2);`,
      `console.log(arr_4); // [0, 1, 2, 5]`,
      `console.log(n_4); // [3, 4],`,
      `** return an array containing the deleted elements or empty array`,
    ],
    mutator: true,
  },

  {
    title: `Array.prototype.toString()`,
    description: `The toString() method returns a string representing the specified array and its elements.`,
    example: [
      `const arr = [1, 2, 3];`,
      `console.log(arr.toString()); // '1, 2, 3'`,
      `** return string`,
    ],
    mutator: false,
  },

  {
    title: `Array.prototype.values()`,
    description: `The values() method returns a new Array Iterator object that contains the values for each index in the array.`,
    example: [
      `const arr = [1, 2, 3];`,
      `const iterator = arr.values()`,
      `for(const value of iterators) {console.log(value);} // 1 2 3`,
      `const arr = [1, 2, 3];`,
      `for(const value of arr.keys()) {console.log(value)}; // 0 1 2`,
      `** return Array Iterator`,
    ],
    mutator: false,
    iteration: true,
  },

  {
    title: `Array.prototype.unShift()`,
    description: `The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.`,
    example: [
      `const arr = [1, 2, 3];`,
      `console.log(arr.unshift(0)); // 4`,
      `console.log(arr) // [0, 1, 2, 3]`,
      `console.log(arr.unshift(-2, -1)); // 6`,
      `console.log(arr); // [-2, -1, 0, 1, 2, 3]`,
      `console.log(arr.unshift(['start']); // 7`,
      `console.log(arr); // [['start'], -2, -1, 0, 1, 2, 3]`,
      `** return new arrays legth`,
    ],
    mutator: true,
  },

  {
    title: `Object.assign()`,
    description: `The toString() method returns a string representing the specified Date object.`,
    example: [
      `const target = {a: 1, b: 2},`,
      `src_1 = {b: 3},`,
      `src_2 = {b: 4, c: 5};`,
      `console.log(Object.assign(target, src_1, src_2)); // {a: 1, b: 4, c: 5}`,
      `// doesn't retention the reference`,
      `const a = {b: 1};`,
      `const c = Object.assign({}, a)`,
      `console.log(c); // {b: 1}`,
      `a.b = 100`,
      `console.log(c); // {b: 1}`,
      `// retentions the reference`,
      `const a = {b: 1};`,
      `const c = Object.assign(a, {v: 1});`,
      `console.log(c); // {b: 1, v: 1}`,
      `a.b = 100;`,
      `console.log(c); // {b: 100, v: 1}`,
      `-- or --`,
      `const a = {b: {d:11}}};`,
      `const c = Object.assign({}, a);`,
      `console.log(c); // {b: {d: 1}}}`,
      `a.b.d = 100;`,
      `console.log(c); // // {b: {d: 100}}}`,
    ],
    mutator: true,
    star: 3,
  },
].map(obj => Object.assign(obj, { _id: returnId() }));
