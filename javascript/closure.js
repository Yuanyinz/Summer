// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.

function once(callback) {
    var hasBeenInvoked = false;
    let result;

    function resultFunc(num1, num2) {
        if (hasBeenInvoked === false) {
            result = callback(num1, num2)
            hasBeenInvoked = true;
        }
        return result;
    }
    return resultFunc;
}

const callback = (num1, num2) => {return num1 + num2};

const resultFunc = once(callback)

console.log(resultFunc(1, 2));
console.log(resultFunc(2, 3));
console.log(resultFunc(6, 3));


// 实现一个可重用的函数，用来创建特定前缀的 ID。
function creatId(N) {
    var idNumber = 0;

    function idGenerator() {
        idNumber++;
        return N + idNumber;
    }
    return idGenerator
}

var generator1 = creatId('A-')
var generator2 = creatId('B-')

console.log(generator1())
console.log(generator1())


console.log(generator2())
console.log(generator2())



// 实现一个累加器函数，每次调用都返回会与一个指定数字相乘的值
function numberMultiply(number) {
    var accumulator = 10;

    function multiply() {
        accumulator = accumulator * number
        return accumulator
    }
    return multiply
}

var number1 = numberMultiply(2)

console.log(number1())
console.log(number1())
console.log(number1())



