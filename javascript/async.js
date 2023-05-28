/* CHALLENGE 1 */
// Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1.
// In what order should the console logs come out? Howdy first or Partnah first?

// const { reject } = require("async");

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  // testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    console.log('welcome')
  }

  // setTimeout(delayedGreet,3000)
  // Uncomment the following line to check your work!
  // delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    console.log('hello')
    setTimeout(function() {console.log('good bye')}, 
    3000);
  }
  // Uncomment the following line to check your work!
  // helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    console.log('hi')
  }
  // setInterval(brokenRecord, 1000)
  // Uncomment the following line to check your work!
  // brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    console.log('hi for now')
  }

  // let interval = setInterval(limitedRepeat, 1000)
  // setTimeout(function() {clearInterval(interval);}, 5000);


  // Uncomment the following line to check your work!
  // limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs() {
    let setinterval = setInterval(theEnd, 2000)
    setTimeout(function() {clearInterval(setinterval);},20000)
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
    let count = 1;

  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const countLogger = delayCounter(3, 1000)
  countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
    let createPromise = new Promise((resolve,reject) => {
      setTimeout(function() {
      resolve(val);
      },2000)
    })
    return createPromise
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds