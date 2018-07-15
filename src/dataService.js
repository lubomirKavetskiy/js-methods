const createId = () => {
  let counter = 1;
  return () => counter++;
};

const returnId = createId();

export const typeOfSelects = [
  {
    _id: `arrayMethods`,
    title: `Array metods`,
    dataForSelect: [
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
          `console.log(a.sort((a, b) => a - b)); //  [-2, 0, 1, 2, 4, 21, 30, 100]`,
          `sort letter:`,
          `const arrStr = ['def', 'abc', 'jhk'];`,
          `console.log(arrStr.sort((a, b) => a.localeCompare(b))); // ["abc", "def", "jhk"]`,
          `console.log(arrStr.sort((a, b) => b.localCompare(a))); // ['jhk', 'def', 'abc']`,
          `** return the sorted array`,
        ],
        mutator: true,
      },

      {
        title: `Array.prototype.splice()`,
        description: `The splice() method changes the contents of an array by removing existing elements and/or adding new elements.`,
        example: [
          `array.splice(from index, hom many elements to cut, what to pust);`,
          `cut elements:`,
          `const arr = [0, 1, 2, 3, 4, 5];`,
          `const cuttedElements = arr.splice(0);`,
          `console.log(arr); // []`,
          `console.log(cuttedElements); // [0, 1, 2, 3, 4, 5];`,
          `const arr_2 = [0, 1, 2, 3, 4, 5];`,
          `const cuttedElements_2 = arr_2.splice(2, 2);`,
          `console.log(arr_2); // [0, 1, 4, 5]`,
          `console.log(cuttedElements_2); // [2, 3]`,
          `const arr_3 = [0, 1, 2, 3, 4, 5];`,
          `const cuttedElements_3 = arr_3.splice(-3, 2);`,
          `console.log(arr_3); // [0, 1, 2, 5]`,
          `console.log(cuttedElements_3); // [3, 4],`,
          `** return an array containing the deleted elements or empty array`,
          `add one element:`,
          `const arr_4 = [0, 1, 2, 3, 4, 5];`,
          `const addedElement = arr_4.splice(3, 0, 100);`,
          `console.log(arr_4); // [0, 1, 2, 100, 3, 4, 5]`,
          `console.log(addedElement); // []`,
          `add several elements:`,
          `const arr_5 = [0, 1, 2, 3, 4, 5];`,
          `const addedElements = arr_5.splice(3, 0, 100, 101);`,
          `console.log(arr_5); // [0, 1, 2, 100, 101, 3, 4, 5]`,
          `console.log(addedElements); // []`,
          `add several elements using spread:`,
          `const arr_6= [0, 1, 2, 3, 4, 5];`,
          `const arr_7 = [100, 101, 102];`,
          `const addedSpread = arr_6.splice(3, 0, ...arr_7);`,
          `console.log(arr_6); // [0, 1, 2, 100, 101, 102, 3, 4, 5]`,
          `console.log(addedSpread); // []`,
          `** always return empty array`,
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
        title: `Array.prototype.unshift()`,
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
        title: `Array.prototype[@@iterator]()`,
        description: `The initial value of the @@iterator property is the same function object as the initial value of the values() property.`,
        example: [
          `const arr = [1, 2, 3];`,
          `const eArr = arr[Symbol.iterator]()`,
          `console.log(eAarr.next().value) // 1`,
          `console.log(eAarr.next().value) // 2`,
          `console.log(eAarr.next().value) // 3`,
        ],
        mutator: false,
      },

      {
        title: `return Array Iterator {}`,
        description: `These are methods which return Array Iterator {}`,
        example: [
          `console.log([1, 2, 3].keys()); // Array Iterator {}`,
          `console.log([1, 2, 3].values()); // Array Iterator {}`,
          `console.log([1, 2, 3].entries()); // Array Iterator {}`,
          `for geting vlues from result these methods you have to use:`,
          `1) Array.from([1, 2, 3].keys() || [1, 2, 3].values() || [1, 2, 3].entries())`,
          `2) for ... of `,
          `for(const val of Array.from([10, 20, 30].entries())) {`,
          `console.log(val);`,
          `} // [0, 10] [1, 20] [2, 30]`,
          `для Iteratora (отриманих з .entries() || .keys() || .values() --- працює лише for...of та .next().value)`,
          `щоб запрацював for...in, потрібно викор. Array.from(.entries(), .keys(), .values())`,
        ],
      },

      {
        title: `references`,
        description: ``,
        example: [
          `якщо розгл. складені (непримітивні) типи даних, то завжди зберігатиметься ссилка.`,
          `для прикладу:`,
          `const obj = {b:1, c:{d:2}};`,
          `const n = obj;`,
          `obj.b = 11;`,
          `obj.c = 0;`,
          `obj.e = 100;`,
          `console.log(n); //=> {b: 11, c: 0, e: 100}`,
          `якщо говорити про недеструктивні методи (concat, slice) та використання спреду у деструктивному методі Object.assign(),`,
          `то у новостворених об'єктах (масивах) ссилки зберігаються лише на складні типи даних обєктів (масивів) з яких вони утворені`,
          `для прикладу:`,
          `const arr_1 = [10, {a:1}];`,
          `const arr_2 = [20, {b:2}];`,
          `const res = arr_1.concat(arr_2);`,
          `arr_1[0] = 11;`,
          `arr_1[1].a = 101;`,
          `arr_1.push(1000);`,
          `arr_2[0] = 200;`,
          `arr_2[1].c = 300;`,
          `arr_2.shift();`,
          `console.log(res); //=> [10, {a: 101}, 20, {b: 2, c: 300}]`,
          `const targ = {a: 1, b: {c: 2}};`,
          `const addObject = {d: 3, e: {f: 4}};`,
          `const n = Object.assign({...targ, ...addObject});`,
          `targ.a = 11,`,
          `targ.b.c = 22;`,
          `targ.h = 33;`,
          `addObject.d = 33;`,
          `addObject.e.f = 44;`,
          `console.log(n); //=> {a: 1, b: {c: 22}, d: 3, e: {f: 44}}`,
          `а у деструктивному методі Object.assign() для обєкту, що створився з таргет, ссилки зберігаються на всі (і примітивні і складні) типи даних таргет-обєкту):`,
          `зберігаються ссилки лише на таргет обєкт, якщо такий був:`,
          `const targ = {a: 1, b: {c: 2}};`,
          `const addObject = {d: 3, e: {f: 4}};`,
          `const n = Object.assign(targ, addObject);`,
          `targ.a = 11;`,
          `targ.b.c = 22;`,
          `targ.h = 33;`,
          `addObject.d = 33;`,
          `addObject.e.f = 44;`,
          `console.log(n); //=> {a: 11, b: {c: 22}, d: 3, e: {f: 44}, h: 33}`,
          `n.a = 10000`,
          `console.log(targ.a); //=> 10000`,
        ],
      },
    ].map(obj => Object.assign(obj, { _id: returnId() })),
  },

  {
    _id: `objectMethods`,
    title: `Object metods`,
    dataForSelect: [
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
        ],
        mutator: true,
      },

      {
        title: `Object.create()`,
        description: `The Object.create() method creates a new object, using an existing object to provide the newly created object's __proto__ . (see browser console for visual evidence.)`,
        example: [
          `const obj = {`,
          `a: 1,`,
          `};`,

          `const obj_2 = Object.create(obj, {b: {configurable: true, enumerable: true, value: 300}});`,
          `console.log(obj_2); //=> {b: 2}`,
          `спочатку шукаєтьсяв obj_2 - нема, шукається у прототипі - є`,
          `console.log(obj_2.a); // 1`,
          `obj_2.newProp = 50;`,
          `obj.a = 100;`,
          `console.log(obj_2); //=> {b: 2, newProp: 50}`,
          `console.log(obj_2.a); // 100`,
          `console.log('a' in obj_2); //=> true`,
          `console.log(obj_2.hasOwnProperty('a')); //=> false`,

          `////`,
          `const obj = new Object();`,

          `console.log('toString' in obj); //=> true`,
          `console.log(obj.hasOwnProperty('toString')); //=> false`,
          `const objNotClear = Object.create(Object.prototype);`,
          `console.log('toString' in objClear); //=> true`,

          `const objClear = Object.create(null);`,
          `console.log('toString' in objClear); //=> false`,
        ],
        mutator: false,
      },

      {
        title: `Object.defineProperty()`,
        description: `визначає нову або змінює існуючу властивість безпосередньо на об'єкті, повертаючи цей об'єкт.`,
        example: [
          `const obj = {};`,
          `Object.defineProperty(obj, 'a', {value: 1, writable: false});`,
          `console.log(obj); //=> {a: 1}`,
          `obj.a = 100;`,
          `console.log(obj); //=> {a: 1}`,
          `Object.defineProperty(obj, 'b', {value: 2, writable: true});`,
          `obj.b = 200;`,
          `console.log(obj); //=> {a: 1, b: 200}`,
          `якщо writable - false => свойство не переприсвоїш, навіть цим же самим методом`,
        ],
        mutator: true,
      },

      {
        title: `Object.entries()`,
        description: `The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).`,
        example: [
          `const obj = {a: 1, b: 2};`,
          `const arr = Object.entries(obj);`,
          `console.log(arr); //=> [["a": 1], ["b": 1]]`,
        ],
        mutator: false,
      },

      {
        title: `Object.freeze()`,
        description: `Prevents adding, removing or changing any vlue.`,
        example: [
          `const obj = {a: 1, b: {c: 2}};`,
          `const f = Object.freeze(obj);`,
          `obj.a = 100;`,
          `obj.b.c = 22;`,
          `obj.n = 555;`,
          `f.d = 100;`,
          `delete f.a;`,
          `console.log(f); //=> {a: 1, b: {c: 22}}`,
          `return freezed object`,
        ],
        mutator: false,
      },

      {
        title: `Object.getPrototypeOf()`,
        description: `Returns prototype.`,
        example: [
          `const obj = {};`,
          `const n = Object.create(obj);`,
          `console.log(Object.getPrototypeOf(n) == bject); //=> true`,
        ],
        mutator: false,
      },

      {
        title: `Object.is()`,
        description: `The Object.is() method determines whether two values are the same value.`,
        example: [
          `console.log(Object.is(1, true)); //=> true`,
          `console.log(Object.is(5, 5)); //=> true`,
          `console.log(Object.is([], [])); //=> false`,
        ],
        mutator: false,
      },

      {
        title: `Object.keys()`,
        description: `The Object.keys() method returns an array of a given object's property names, in the same order as we get with a normal loop.`,
        example: [
          `const obj = {100: 'a', 1: {c: 2}};`,
          `console.log(Object.keys(obj)); //=> ['1', '100']`,
          `console.log(Object.keys('foo')); //=> ['0', '1', '2']`,
          `console.log(Object.keys([1, 5])); //=> ['0', '1']`,
          `console.log([1, 5]].keys()); //=> Array Iterator {}`,
          `const obj = {a: 1, b: {c: 2}};`,
          `const res = Object.keys(obj);`,
          `obj.p = 100;`,
          `delete obj.a;`,
          `obj.b.k = 555;`,
          `console.log(res); //=> ['a', 'b']`,
        ],
        mutator: false,
      },

      {
        title: `Object.prototype.hasOwnProperty()`,
        description: `The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).`,
        example: [
          `const obj = {100: 'a', 1: {c: 2}};`,
          `console.log(obj.hasOwnProperty(100)); //=> true`,
          `console.log(obj.hasOwnProperty('c')); //=> false`,
        ],
        mutator: false,
      },

      {
        title: `Object.seal()`,
        description: `The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable..`,
        example: [
          `const obj = {a: 1};`,
          `Object.seal(obj);`,
          `obj.a = 100;`,
          `console.log(obj.a); //=> 100`,
          `obj.n = 50;`,
          `console.log(obj.n); //=> undefined`,
        ],
        mutator: false,
      },

      {
        title: `Object.values()`,
        description: `The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).`,
        example: [
          `const obj = {100: 'a', 1: {c: 2}};`,
          `console.log(Object.values(obj)); //=> [{c: 2}, 'a'] ** 1, 100 ...`,
          `console.log(Object.values('foo')); //=> ['f', 'o', 'o']`,
        ],
        mutator: false,
      },
    ].map(obj => Object.assign(obj, { _id: returnId() })),
  },

  {
    _id: `mapAndSet`,
    title: `Map && Set`,
    dataForSelect: [
      {
        title: `Map`,
        description: `Map - спец. обєкт із набором пара ключ-значення. Ключем може бути що завгодно. Ключ завжди унікальний.`,
        example: [
          `Літерала не існує, тому створюється const map = new Map();`,
          `в нього входить Iterator ([['key', 'value']])`,
          `const map = new Map([['a', 1], ['b', 2]])`,
          `console.log(map); //=> Map(2) {"a" => 1, "b" => 2}`,
        ],
      },

      {
        title: `Map.prototype.set()`,
        description: `The set() method adds or updates an element with a specified key and value to a Map object.`,
        example: [
          `const map = new Map();`,
          `map.set('a', 1)`,
          `console.log(map.size); //=> 1`,
        ],
      },

      {
        title: `Map.prototype.get()`,
        description: `The set() method adds or updates an element with a specified key and value to a Map object.`,
        example: [
          `const map = new Map([['a', 1]]);`,
          `console.log(map.get('a')); //=> 1`,
          `console.log(map.get(1); //=> undefined`,
        ],
      },

      {
        title: `Map.prototype.has()`,
        description: `The has() method returns a boolean indicating whether an element with the specified key exists or not.`,
        example: [
          `const map = new Map([['a', 1]]);`,
          `console.log(map.has('a')); //=> true`,
          `console.log(map.get(1)); //=> false`,
        ],
      },

      {
        title: `Map.prototype.keys()`,
        description: `The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.`,
        example: [
          `const map = new Map([['a', 1], ['b', 2]]);`,
          `console.log(map.keys()); //=> MapIterator ['a', 'b']`,
        ],
      },

      {
        title: `Map.prototype.values()`,
        description: `The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.`,
        example: [
          `const map = new Map([['a', 1], ['b', 2]]);`,
          `console.log(map.keys()); //=> MapIterator ['a', 'b']`,
        ],
      },

      {
        title: `Map.prototype.entries()`,
        description: `The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.`,
        example: [
          `const map = new Map([['a', 1], ['b', 2]]);`,
          `console.log(map.entries()); //=> MapIterator {"a" => 1, "b" => 2} == [['a', 1], ['b', 2]]`,
          `const map = new Map([['a', 1], ['b', 2]]);`,
          `for (const val of map.entries()) {console.log(val);} //=> ['a', 1] ** ['b', 2`,
        ],
      },

      {
        title: `Map.prototype.forEach()`,
        description: `The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.`,
        example: [
          `const map = new Map([['a', 1], ['b', 2]]);`,
          `console.log(map.forEach((val, key, map) => console.log(val, key, map))); //=> 1 "a" Map(2) {"a" => 1, "b" => 2} ** 2 "a" Map(2) {"a" => 1, "b" => 2}`,
        ],
      },

      {
        title: `Map.prototype.clear()`,
        description: `The clear() method removes all elements from a Map object.`,
        example: [
          `const map = new Map([['a', 1], ['b', 2]]);`,
          `map.clear();`,
          `console.log(map.size); //=> 0`,
        ],
      },

      {
        title: `Map.prototype.delete()`,
        description: `The delete() method removes the specified element from a Map object.`,
        example: [
          `const map = new Map([['a', 1]]);`,
          `map.delete('a');`,
          `console.log(map.has('a')); //=> false`,
        ],
      },

      {
        title: `Set`,
        description: `Набір унікальних значень будь-якого типу без визначеного порядку.`,
        example: [
          `const set = new Set([1, 2, 1, 3, 2]);`,
          `console.log(set); //=> Set(3) {1, 2, 3}`,
          `ключів не має взагалі`,
        ],
      },

      {
        title: `Set.prototype.add()`,
        description: `The add() method appends a new element with a specified value to the end of a Set object.`,
        example: [
          `const set = new Set();`,
          `set.add(100).add(1)`,
          `console.log(set); //=> Set(2) {100, 1}`,
        ],
      },

      {
        title: `Set.prototype.has()`,
        description: `The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.`,
        example: [
          `const set = new Set([1, 2, 3, 4, 5]);`,
          `console.log(set.has(1)); //=> true`,
          `console.log(set.has(6)); //=> false`,
        ],
      },

      {
        title: `Set.prototype.entries()`,
        description: `The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.`,
        example: [
          `const set = new Set([5, 'n']);`,
          `console.log(set.entries()); //=> SetIterator {5, "n"}`,
          `for(const val of set.entries()) {console.log(val)} //=> [5, 5] ** ['n', 'n']`,
        ],
      },

      {
        title: `Set.prototype.values()`,
        description: `The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.`,
        example: [
          `const set = new Set([1, 3, 5]);`,
          `console.log(set.values()); //=> SetIterator {1, 3, 5}`,
          `console.log(set.values().next().value); //=> 1`,
          `console.log(set.values().next().value); //=> 3`,
          `console.log(set.values().next().value); //=> 5`,
          `returns Iterator`,
        ],
      },

      {
        title: `Set.prototype.forEach()`,
        description: `The forEach() method executes a provided function once for each value in the Set object, in insertion order.`,
        example: [
          `const set = new Set([1, 3, 5]);`,
          `console.log(set.forEach((val_1, val_2, set) => console.log(val_1, val_2)); //=> 1, 1 ** 3, 3 ** 5, 5`,
        ],
      },

      {
        title: `Set.prototype.clear()`,
        description: `The clear() method removes all elements from a Set object.`,
        example: [
          `const set = new Set([1, 3, 5]);`,
          `set.clear()`,
          `console.log(set.size); //=> 0`,
        ],
      },

      {
        title: `Set.prototype.delete()`,
        description: `The delete() method removes the specified element from a Set object.`,
        example: [
          `const set = new Set([{a: 10, b: 38}, {a: 5}]);`,
          `set.forEach(el => {if(el.a > 5) set.delete(el)})`,
          `console.log(set); //=> {{5}}`,
        ],
      },

      {
        title: `WeakMap`,
        description: `WeakMap - коллекція пар ключ - значення, ключами можуть бути тільки об'єкти`,
        example: [
          `завжди WeakMap.length == 0`,
          `const weakMap = new WeakMap()`,
          `const weakMap = new WeakMap([[{}, 1]])`,
          `weakMap.set({d: 4}, 1)`,
          `console.log(weakMap); //=> WeakMap {{…} => 1, {...} => 1}`,
        ],
      },

      {
        title: `WeakMap.prototype.set()`,
        description: `The set() method adds a new element with a specified key and value to a WeakMap object.`,
        example: [
          `const weakMap = new WeakMap()`,
          `const obj = {};`,
          `weakMap.set(obj, 10)`,
          `console.log(weakMap.get(obj)); //=> 10`,
        ],
      },

      {
        title: `WeakMap.prototype.get()`,
        description: `The get() method returns a specified element from a WeakMap object.`,
        example: [
          `const weakMap = new WeakMap()`,
          `const obj = {};`,
          `weakMap.set(obj, 10)`,
          `console.log(weakMap.get(obj)); //=> 10`,
          `console.log(weakMap.get(obj__2)); //=> undefined`,
        ],
      },

      {
        title: `WeakMap.prototype.has()`,
        description: `The has() method returns a boolean indicating whether an element with the specified key exists in the WeakMap object or not.`,
        example: [
          `const weakMap = new WeakMap()`,
          `const obj = {};`,
          `weakMap.set(obj, 10)`,
          `console.log(weakMap.has(obj)); //=> true`,
          `console.log(weakMap.get(obj__2)); //=> false`,
        ],
      },

      {
        title: `WeakMap.prototype.delete()`,
        description: `The has() method returns a boolean indicating whether an element with the specified key exists in the WeakMap object or not.`,
        example: [
          `const weakMap = new WeakMap()`,
          `const obj = {};`,
          `weakMap.set(obj, 10)`,
          `weakMap.delete(obj)`,
          `console.log(weakMap.has(obj)); //=> false`,
        ],
      },

      {
        title: `WeakSet`,
        description: `коллекція, елементами якої можуть бути тільки унікальні об'єкти, ссилки на які являються слабими. Якщо не буде ні одної зовн. ссилки на об'єкт у WeakSet, то збірник мусору видалить цей об'єкт.`,
        example: [
          `const weakSet = new WeakSet([{a:1}, {b:2}]);`,
          `const obj = {c: 3};`,
          `weakSet.add(obj)`,
          `console.log(weakSet.has(obj)); //=> true`,
          `weakSet.delete(obj);`,
          `console.log(weakMap.has(obj)); //=> false`,
        ],
      },
    ].map(obj => Object.assign(obj, { _id: returnId() })),
  },

  {
    _id: `loops`,
    title: `Loops`,
    dataForSelect: [
      {
        title: `for`,
        description: ``,
        example: [
          `const arr = [3, 6, 2, 1];`,

          `const foo = num => {`,
          `for (let i=0; i<arr.length; i++) {`,
          `if(arr[i] > num) {`,
          `return;`,
          `}`,
          `console.log(arr[i]);`,
          `}`,
          `}`,

          `foo(5); //=> 3`,

          `const arr = [3, 6, 2, 1];`,

          `const foo = num => {`,
          `arr.forEach(el => {`,
          `if(el > num) {`,
          `return;`,
          `};`,
          `console.log(el);`,
          `});`,
          `}`,

          `foo(5); //=> 3 ** 2 ** 1`,
        ],
      },

      {
        title: `for ... in`,
        description: ``,
        example: [
          `class Color {`,
          `constructor(c) {`,
          `this.col = c;`,
          `}`,
          `}`,

          `const obj = {a: 1, b: 2,};`,
          `Color.prototype = obj;`,
          `const color = new Color('green');`,
          `console.log(color instanceof Color); //=> true`,
          `console.log(Object.getPrototypeOf(color)); => obj`,

          `for (const i in color) {`,
          `console.log(i);`,
          `};`,
          `// => col, a, b`,
          `for (const i in color) {`,
          `if(i in color) {`,
          `console.log(i);`,
          `}`,
          `};`,
          `// => col, a, b`,

          `for(const i in color) {`,
          `if(color.hasOwnProperty(i)) {`,
          `console.log(i);`,
          `}`,
          `};`,
          `// => col`,
        ],
      },

      {
        title: `for ... of`,
        description: ``,
        example: [
          `use for:`,
          `String, Array, Array-like arguments, NodeList, Array Iterator {}, TypedArray, Map and Set`,
          `don't use for Object`,
        ],
      },
    ].map(obj => Object.assign(obj, { _id: returnId() })),
  },
];
