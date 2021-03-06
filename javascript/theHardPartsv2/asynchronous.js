/* CHALLENGE 1 */

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
  // ADD CODE HERE
  function welcoming(){
    console.log('welcome');
  }
  setTimeout(welcoming, 3000);
}
// Uncomment the following line to check your work!
//delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  function bye(){
    console.log('good bye');
  }
  console.log('hello');
  setTimeout(bye,2000);
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 2 seconds): good bye


/* CHALLENGE 4 */
function brokenRecord() {
  // ADD CODE HERE
    setTimeout(() => {
    console.log('hi');
    setTimeout(brokenRecord, 1000);
  }, 0)
}
// Uncomment the following line to check your work!
//brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  function someHis(){
    console.log('hi');
  }
  let interv = setInterval(someHis, 1000);
  setTimeout(() => clearInterval(interv), 5000);
    
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, inter, durat) {
  // ADD CODE HERE
  let interval = setInterval(func, inter*1000);
  setTimeout(()=> clearInterval(interval),durat*1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
//everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
	let counter=1;
  function printing(){
    let interval = setInterval(()=>{console.log(counter);
                                   	counter++}, wait)
    setTimeout(()=> clearInterval(interval),target*wait);
  }
  return printing;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const countLogger = delayCounter(3, 1000)
//countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
  // ADD CODE HERE
  let thePromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve(val); 
  }, 2000);
	});
  return thePromise;
  
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const createPromise = promised('wait for it...');
//createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.cb = cb;
    this.counter = 1;
    this.interval;
  }
  // ADD METHODS HERE
  
  start(){
    
    this.interval = setInterval(()=>{console.log(this.counter);
                                   	if (this.counter==60) this.counter = 0;
                                    this.counter++}, 1000)
  }
  reset(){
    setTimeout(()=> clearInterval(this.interval),0);
    this.counter = 1;
  
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
//const clock = new SecondClock((val) => { console.log(val) });
//console.log("Started Clock.");
//clock.start();
//setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
  let checker = true;
  let intervalCh;
  function returningFunction(){
    
    if (checker){
      checker = false;
      intervalCh = setInterval(()=>{checker = true;}, interval);
      return callback();
  	}
 		return
  }
  
	return returningFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 1000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 2900); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'