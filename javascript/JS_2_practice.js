// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray.push(array[i])
    }
  }
  return newArray
}

// console.log(returnOdds([1,2,3,4,5,6,7]));


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0)
      newArray.push(array[i])
  }
  return newArray
}

// console.log(returnEvens([1,2,3,4,5,6,7]))

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  let biggestNumber = - Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > biggestNumber)
      biggestNumber = array[i]
  }
  return biggestNumber
}

// console.log(findMax([1,25,6,3]))
// console.log(findMax([-1, -5, -10]))



/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */

// two pointers
// let start = 0;
// let end = string.length - 1;

// loop from the beginning => leading whitespace    start += 1; 
// loop from the ending => trailing whitespace      end -= 1;



// increment by 1 => 1) start = start + 1; 2) start += 1; 3) start++
//'hello '
// let name = 'YY'
// `` => `hello {name}`
function trim(string) {
  let start = 0;
  while (start < string.length && string[start] === ' ') {
    start += 1; 
  }

  //length = 6
  let end = string.length - 1;
  while (end < string.length && string[end] === ' ') {
    end -= 1;
  }

  let result = '';
  //loop: index; index < value; index++
  // for (let i = start; i <= end; i++) {
  //   result += string[i];
  // }

  result = string.slice(start, end + 1)
  return result;
}
console.log(trim(' hello '))






// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//   console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++){
    callback(array[i], i , array);
  }
}

function callback1 (element, index, array) {
  console.log(element + "," + index + "," + "[" + array.join(",") + "]");
}

// const callback = function (element) {
//   console.log(element * 2)
// }

// console.log(forEach(['a','b','c'], callback1));



// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map


function map(array, callback) {
  let result = [];
  for(let i = 0; i < array.length;i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const callback2 = function(element) {
  return element * 3;
};

// console.log(map([1,2,3],callback2));



// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  let result = [];
  if (Array.isArray(collection) === true) {
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i]) === true){
      result.push(collection[i])
    }
  }
  return result
}
  else {
  for (let i = 0; i < Object.values(collection).length; i++) {
    if (callback(Object.values(collection)[i]) === true){
      result.push(Object.values(collection)[i])
    }
  }
  return result
}
}
 
console.log(filter([1,2,3,4], function(element, index, collection) {
   return element % 2 === 0;
  }))
  
console.log(filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
     return element % 2 !== 0;
  }))


// Removes all elements from array/object that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter

function reject(collection, callback) {
  if (Array.isArray(collection) === true) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i]) === false){
        result.push(collection[i])
      }
    }
    return result
  } 
  else {
    let result = {};
    const keys = Object.keys(collection);
    for (let i = 0; i < Object.keys(collection).length; i++) {
      if (callback(collection[Object.keys(collection)[i]]) === false){
        result[Object.keys(collection)[i]] = collection[Object.keys(collection)[i]];
    }
  }
  return result
}
  }

console.log(reject([1,2,3,4], function(element, index, collection) {
  return element % 2 === 0;
  }))

console.log(reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
  return value % 2 !== 0;
}))

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]

// Array.includes(element) => not optimal 


// const obj = {1: true}

function uniq1(array) {
  const obj = {};
  for (let i = 0; i<array.length; i++) {
    if (i in obj) {
      obj[array[i]]=true;
    }
    else {
      obj[array[i]]=false;
    }
  }
  console.log(obj)

  const result = [];

  // for (let key in obj) {
  //   result.push(Number(key))
  // }

  Object.keys(obj).forEach(key => result.push(Number(key)))

  // objkey = []
  // for (let i = 0; i<Object.keys(obj).length; i++){
  //   objkey.push(Object.keys(obj)[i])
  // }
  // console.log(objkey)



  // result = []
  // for (let i = 0; i<objkey.length;i++){
  //   let num= Number(objkey[i]);
  //   result.push(num);
  // }
  return result
}

console.log(uniq1([1,2,1]))

// JS => const set = new Set()
// Set.add()
// Set.has()

function uniq2(array) {
  const set1 = new Set(array);
  setArray = []
  for (const i of set1) {
    setArray.push(i)
  }
  return setArray
}

console.log(uniq2([1,2,1]))




// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1

function indexOf(array, value) {
  for (let i = 0; i<array.length; i++){
    console.log(array)
    if (array[i] === value) {
      return 0
    }
  }
  return -1
}

console.log(indexOf([11,22,33], 33))
console.log(indexOf([11,22,33], 5))
console.log(indexOf([1, 2, 3], 2))
console.log(indexOf([1, 2, 3], 1))




// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.

// closure

// execution context

// ... => rest and spread operator
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [arr3, arr4];
console.log(arr5)
console.log([...arr3, ...arr4])

function once(func) {
  let hasBeenInvoked = false;
  let result;

  return function resultFunc(...args) {
    if (!hasBeenInvoked) {
      result = func(...args);
      hasBeenInvoked = true;
    }

    return result;
  }
}

const func = (num1, num2) => {return num1 + num2};

const resultFunc = once(func)

console.log(resultFunc(1, 2));
console.log(resultFunc(2, 3));
console.log(resultFunc(6, 3));







// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  let acc = start || 0;
  for (let i = 0; i<array.length; i++) {
    acc = callback(acc,array[i])
  }
  return acc
}

console.log(reduce([1,2], function(stored,current) {
 return stored + current;
}))

console.log(reduce([1,2], function(stored,current) {
   return stored + current;
  },1))




// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array,func) {
  for(let i = 0; i<array.length; i++) {
    if (func(array[i]) === false) {
      return false
    } 
  }
  return true
}
// console.log(every([2, 4, 6]))
// function callback7(elem) {
//   return elem % 2 == 0;
// }
console.log(every([2, 4, 6], function(elem) {
  return elem % 2 == 0;
}))

console.log(every([2, 4, 7], function(elem) {
    return elem % 2 == 0;
  }))

  
// console.log(every([2, 4, 6]))
// function callback7(elem) {
//   return elem % 2 == 0;
// }

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]

// Array.flatten()

function flatten(array) {
  const newArray = array.flat();
  return newArray
}

console.log(flatten([1, [2, 3, [4]]]))








// Recursion

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  // CODE HERE
}



// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
function createArray() {
  // CODE HERE

}

//1. 整理QA的notes 2. 重写filter,every, indexOf; 3. 画图once