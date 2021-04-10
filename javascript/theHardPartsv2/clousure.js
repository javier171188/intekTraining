// CHALLENGE 1
console.log('Challenge 1################');
function createFunction() {
  function greeting(){
    console.log('hello');
  }
	return greeting;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
console.log('Challenge 2################');
function createFunctionPrinter(input) {
	function printing(){
    console.log(input);
  }
  return printing
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
console.log('Challenge 3################');
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); //1
willCounter(); //2
willCounter(); //3

jasCounter(); //1
willCounter(); //4


function addByX(x) {
  function adding(input){
    return x+input;
  }
	return adding;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9


// CHALLENGE 4
console.log('Challenge 4################');
function once(func) {
  let counter = 0;
  let r;
  function returnFunct(input){
  	if(counter == 0){
      r = func(input)
      counter++;
    } 
    return r;
  }
  return returnFunct;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
console.log('Challenge 5################')
function after(count, func) {
		let counter = count
  	
  	function calling(){
      counter--
      console.log(counter);
      if (counter == 0){
      	func();  
      }
      
    }
  
  	return calling
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
console.log('Challenge 6################')
function delay(func, wait) {
	setTimeout(func, wait);
}


// CHALLENGE 7
console.log('Challenge 7################');
function rollCall(names) {
  let counter = 0;
  function listing(){
    if(counter < names.length ){
    	console.log(names[counter]);  
      counter++;
    }
    else{
      console.log('Everyone accounted for');
    }
  }
	return listing;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
console.log('Challenge 8################');
function saveOutput(func, magicWord) {
	let given = {};
  function magic(input){
    if (input == magicWord){
      return given;
    }
    given[input] = func(input);
    return func(input);
  }
  return magic;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
console.log('Challenge 9################');
function cycleIterator(array) {
  let counter = -1;
  function giveElements(){
    counter++;
    if (counter > array.length-1){
      counter = 0;
    }
    return array[counter];
  }
  return giveElements;

}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
console.log('Challenge 10###############');
function defineFirstArg(func, arg) {
	function returnedFunction(input){
    return func(arg,input);
  }
  return returnedFunction;
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
console.log('Challenge 11###############');
function dateStamp(func) {
	let obj = {};
  function returnedFunction(args){
    var d = new Date();
    obj['date'] = String(d);
    obj['output'] = func(args);
    return obj;
  }
  return returnedFunction;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
console.log('Challenge 12###############');
function censor() {
	let pairs = [];
  function returningFunction(first, second=false){
    if(second){
      pairs.push([first, second]);
    } else{
      for(let e of pairs){
        first = first.replace(e[0], e[1]);
      }
    }
    return first;
  }
  return returningFunction;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
console.log('Challenge 13###############');
function createSecretHolder(secret) {
	var obj ={};
  function createObj(){
    obj.setSecret = function(input){secret = input};
  	obj.getSecret = function(){
      console.log(secret);
      return secret};
  	return obj;
  }
  return createObj();
  
}

// /*** Uncomment these to check your work! ***/
let obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2


// CHALLENGE 14
console.log('Challenge 14###############');
function callTimes() {
  let counter = 0;
	function calling(){
    counter++;
    console.log(counter);
    return counter;
  }
  return calling;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


// CHALLENGE 15
console.log('Challenge 15###############');
function russianRoulette(num) {
  
  function seting(){
    num--;
    if(num>0){
      return 'click';
    } else if (num == 0){
      return 'bang'
    }
    else{
      return 'reload to play again'
    }
  }
	return seting;
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
console.log('Challenge 16###############');
function average() {
  let sum = 0;
  let total = 0;
  function averaging(n=false){
    if (n===false){
      if(total==0) return 0;
      return sum/total;
    }
    sum += n;
    total++;
    return sum/total;
  }
	return averaging;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
console.log('Challenge 17###############');
function makeFuncTester(arrOfTests) {
  function returningFunction(cb){
    let check = true;
    for (let e of arrOfTests){
      if(cb(e[0])!== e[1])
        check = false;
    }
    return check;
  }
  return returningFunction;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
console.log('Challenge 18###############');
function makeHistory(limit) {
	let history = [];
  function saving(s){
    if (s=='undo'){
      if (history.length == 0){
          return 'nothing to undo'
          }
    	let d = history.pop();
      return d + ' undone'
    }
    
    if (history.length < limit){
        history.push(s);
    }else{
      history = history.slice(1);
      history.push(s);
    }
    return s + ' done';
  }
  return saving;
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
console.log('Challenge 19###############');
function blackjack(array) {
	let index = 0;
  let second = false;
  let bust = '';
  let count = 0;
  function dealer(n1,n2){
    function player(){
      if(bust == 'bust'){
        return 'you are done!'
      }
      if (second === false){
        second = true;
        count = n1 + n2;
        return count;
      }
      if (array[index]+count > 21){
    		bust = 'bust';
        index++;
        return bust;
    	}else{
        count = count+array[index];
        index++;
      	return count;
      }
      
    }
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
