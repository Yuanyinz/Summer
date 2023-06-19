const { returnOdds,returnEvens,findMax,trim,forEach,callback1,map,callback2,filter,reject,uniq1,uniq2,indexOf,once,reduce,every,flatten } = require('./JS_2_practice.js');

describe('testing returnOdds', () => {
    test('should return odd numbers', () => {
      expect(returnOdds([1,2,3,4,5,6,7])).toEqual([1,3,5,7]);
    });
})

describe('testing returnEvens', () => {
    test('should return even numbers', () => {
      expect(returnEvens([1,2,3,4,5,6,7])).toEqual([2,4,6]);
    });
})

describe('testing findMax', () => {
    test('should return max numbers', () => {
      expect(findMax([1,25,6,3])).toBe(25);
    });
})

describe('testing trim', () => {
    test('should return trim', () => {
      expect(trim(' hello ')).toBe('hello');
    });
})

describe('testing forEach', () => {
    test('should return forEach', () => {
      expect(forEach(['a','b','c'],callback1)).toEqual(['a',0,['a','b','c'],'b',1,['a','b','c'],'c',2,['a','b','c']]);
    });
})

describe('testing returnmap', () => {
    test('should return map', () => {
      expect(map([1,2,3],callback2)).toEqual([3,6,9]);
    });
})

describe('testing returnfilter', () => {
    test('should return filter', () => {
        expect(filter([1,2,3,4], function(element, index, collection) {
             return element % 2 === 0;
            })).toEqual([2,4]);
        expect(filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
             return element % 2 !== 0;
            })).toEqual([1,3]);
    });
})

describe('testing returnreject', () => {
    test('should return reject', () => {
      expect(reject([1,2,3,4], function(element, index, collection) {
        return element % 2 === 0;
        })).toEqual([1,3]);
    });
    test('should return reject', () => {
        expect(reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
            return value % 2 !== 0;
          })).toEqual({"b": 2, "d": 4});
      });
})

describe('testing returnuniq1', () => {
    test('should return uniq numbers', () => {
      expect(uniq1([1,2,1])).toEqual([1,2]);
    });
})

describe('testing returnuniq2', () => {
    test('should return uniq numbers', () => {
      expect(uniq2([1,2,1])).toEqual([1,2]);
    });
})

describe('testing returnindexOf', () => {
    test('should return indexOf', () => {
      expect(indexOf([11,22,33], 33)).toBe(0);
    });
})

describe('testing returnreduce', () => {
    test('should return reduce', () => {
      expect(reduce([1,2], function(stored,current) {
        return stored + current;
       })).toBe(3);
    });
    test('should return reduce', () => {
        expect(reduce([1,2], function(stored,current) {
            return stored + current;
           },1)).toBe(4);
      });
})

describe('testing returnevery', () => {
    test('should return every', () => {
      expect(every([2, 4, 6], function(elem) {
        return elem % 2 == 0;
      })).toBe(true);
    });
    test('should return every', () => {
        expect(every([2, 4, 7], function(elem) {
          return elem % 2 == 0;
        })).toBe(false);
      });
})

describe('testing returnflatten', () => {
    test('should return flatten', () => {
      expect(flatten([1, [2, 3, [4]]])).toEqual([1, 2, 3, [4]]);
    });
})

// describe('testing returnonce', () => {
//     test('should return once', () => {
//       expect(flatten([1, [2, 3, [4]]])).toEqual([1, 2, 3, [4]]);
//     });
// })