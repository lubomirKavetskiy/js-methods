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
      `// Dont change target`,
      `console.log(target); //[1, 2, 3] `,
      `// But retention the reference `,
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
    mutable: false,
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
    mutable: true,
  },

  {
    title: `Array.prototype.entriesn()`,
    description: `The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.`,
    example: [
      `const arr = [5, 7, 9];`,
      `console.log(arr.entries()); // Array Iterator { }`,
      `//console.log(Array.from(arr.entries())); // [[0, 5], [1, 7], [2, 9]]`,
      `for (let val of arr.entries()) {console.log(val)}; // [0, 5] [1, 7] [2, 9]`,
    ],
    mutable: false,
  },

  {
    title: `Array.prototype.every()`,
    description: `The every() method tests whether all elements in the array pass the test implemented by the provided function.`,
    example: [
      `const arr = [5, 10, 15];`,
      `console.log(arr.every(e => e % 5 === 0)); //true`,
    ],
    mutable: false,
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
    mutable: true,
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
    mutable: false,
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
    mutable: false,
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
    mutable: false,
  },

  {
    title: `Array.prototype.forEach()`,
    description: `The forEach() method executes a provided function once for each array element.`,
    example: [
      `const numbers = [5, [12], [3], -2];`,
      `console.log(numbers.findIndex(n => Array.isArray(n))); //1`,
      `console.log(numbers.findIndex(n => n%4 === 0)); //1`,
      `console.log(numbers.findIndex(n => n == 3)); //2`,
      `console.log(numbers.findIndex(n => n > 12)); //-1`,
      `**return the index of the first element in array that executes condition (doesn't return array) or -1`,
    ],
    mutable: false,
  },

  {
    title: `Object.assign()`,
    description: `The toString() method returns a string representing the specified Date object.`,
    example: [
      `const target = {a: 1, b: 2},`,
      `src_1 = {b: 3},`,
      `src_2 = {b: 4, c: 5};`,
      `console.log(Object.assign(target, src_1, src_2)); // {a: 1, b: 4, c: 5}`,
      `// NEVER retention the reference`,
      `src_2.b = 100;`,
      `console.log(target.b); // 4`,
      `console.log(Object.assign({...target, c: 6})); //{a: 1, b: 4, c: 6}`,
      `console.log(Object.assign({}, src_1, src_2)); // {b: 100, c: 5}`,
    ],
    mutable: true,
    star: 3,
  },
].map(obj => Object.assign(obj, { _id: returnId() }));
