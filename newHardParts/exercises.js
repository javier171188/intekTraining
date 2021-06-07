//Promises
// Challenge 1

function sayHello() {
    setTimeout(function(){ console.log("Hello"); }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2

var promise = new Promise(function (resolve, reject) {
// ADD CODE HERE
setTimeout(resolve,1000);
});


// Should print out "Resolved!"
// ADD CODE HERE
function solved(){
console.log('Resolved!');
}
promise.then(solved);

// Challenge 3

promise = new Promise(function(resolve, reject) {
// ADD CODE HERE
reject();
})

// Should print out "Reject!"
// ADD CODE HERE
function rejected(){
console.log('Regected!');
}
promise.catch(rejected);

// Challenge 4

promise = new Promise(function (resolve, reject) {
// ADD CODE HERE
resolve();
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");


// Challenge 5
function delay(){
promise = new Promise(function (resolve, reject){
    setTimeout(resolve,1000);
})
return promise;
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise(function(resolve, reject){
resolve('Second!');
})
var firstPromise = new Promise(function(resolve, reject){
resolve(secondPromise);
})

firstPromise.then((value)=> console.log(value));
// Challenge 7
const fakePeople = [
{ name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
{ name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
{ name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
const returnTime = Math.floor(Math.random() * 1000);
return new Promise((resolve, reject) => {
if (i >= 0 && i < fakePeople.length) {
  setTimeout(() => resolve(fakePeople[i]), returnTime);
} else {
  reject({ message: "index out of range" });
}
});
};

function getAllData() {
// CODE GOES HERE
const promises = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]
return Promise.all(promises).then(function(values) {
                                                                      return values;
                                                                        });
}
//
// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


//Iterators
// CHALLENGE 1

function sumFunc(arr) {
  // YOUR CODE HERE
  let result = 0;
	for (let e of arr){
    result += e;
  }
  return result;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
	let i = 0;
  function iterator(){
    i++;
    return arr[i-1];
  }
  return iterator;
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
	let i = 0;
  function iterator (){
    let val = arr[i];
    i++;
    return val;
  }
  return {'next':iterator};
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let result = 0;
  let iteratorA = nextIterator(arr);
	for (let i =0; i<arr.length;i++){
   		result += iteratorA.next(); 	
  }
  return result;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  // YOUR CODE HERE
  let i = 0;
  let elems = set;
  function iterator(){
    i++;
    return elems[i-1];
  }
	return{'next':iterator};
}

// Uncomment the lines below to test your work
let mySet = new Set('hey');
console.log(mySet);// set is created empty and can't add elements ?
mySet = ['h','e','y'];
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
	let i = 0;
  function iterator(){
    let ret = [i, arr[i]];
    i++;
    return ret;
  }
  return {'next':iterator};
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
	let words = this.str.split(' ');
  let i = 0;
  let ret;
  function iterator(){
    if (i< words.length){
      ret = {value: words[i], done: false};
    }
    else{
      ret = {done:true};
    }
    i++
    return ret;
  }
  return {'next':iterator}
}

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World');
for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
	let i=0;
  let ret;
  function iterator(){
    if (i===0){
      ret = String(array[i]) + ' is the first element.';
    } else{
      ret = String(array[i]) + ' was found after index ' + String(i-1);
    }
    i++;
    return ret;
  }
  return{'sentence':iterator};
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
	let words;
  if(string == 'english'){
			words = 'hello there';
  }else{
    	words = 'gibberish';
  }
	function printing(){
    setInterval(()=>{
      console.log(words);
    }, 3000);
    
  }
  yield printing();
  
}

//console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
		return new Promise(resolve => {
    setTimeout(() => {
      resolve(noun);
    }, 3000);
  });
}

async function f(noun) {
 	let verb = await waitForVerb(noun);
  console.log(noun+ ' waits');
}

f("dog");
