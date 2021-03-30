// Your code here.
/*
function range(start, end, step=1){
	let arrayR = [];
  	  
  	for (let i = start; i*i != end*end; i += step){
    	arrayR.push(i);
    }
    arrayR.push(end);
  	return arrayR;
}

function sum(numbers){
	let result = 0;	
  	for (let number of numbers){
      result += number;
    }
  	return result;
}

const range = function(start, end, step=1){
	let arrayR = [];
  	  
  	for (let i = start; i*i != end*end; i += step){
    	arrayR.push(i);
    }
    arrayR.push(end);
  	return arrayR;
}

const sum = function(numbers){
	let result = 0;	
  	for (let number of numbers){
      result += number;
    }
  	return result;
}
*/
let range = (start, end, step=1) => {
	let arrayR = [];
    for (let i = start; i*i != end*end; i += step){
    	arrayR.push(i);
    }
  	arrayR.push(end);
  	return arrayR;
}

let sum = (numbers) => {
	let result = 0;	
  	for (let number of numbers){
      result += number;
    }
  	return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// Your code here.
function reverseArray(arrayN){
	let reversed = [];
  	for (let i=arrayN.length-1; i>= 0; i--){
    	reversed.push(arrayN[i])
    }	
  	return reversed;
}

function reverseArrayInPlace(arrayN){
	let correct = reverseArray(arrayN);
  	while (arrayN.length){
    	arrayN.pop(0);
    }
  	for (let i of correct){
      	arrayN.push(i);
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// Your code here.
function arrayToList(arrayL){
    let list = null;
  for(let i = arrayL.length-1; i>= 0; i--){
      list = {value:arrayL[i], rest:list};
  }
  return list;
}

function listToArray(listA){
  let array = [];
  while(listA['rest']){
      array.push(listA['value']);
        listA = listA['rest'];
  }
    array.push(listA['value']);
    return array;
}

function prepend(element, list){
  list = {value:element, rest:list};
    return list;
}

function nth(list, position){
    for (let i =1; i<= position;i++){
      if (!list) return null;
        list = list['rest'];
  }
    if (!list) return null;
    return list['value'];
}

function nth(list,position){
  if (position == 0){
        if (!list) return null;
      return list['value']
  }
    if (!list) return null;
    return nth(list['rest'], position-1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Your code here.
function deepEqual(obj1, obj2){
	if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
  	let objK = Object.keys(obj1);
  	equal = true;
  	for (let key of objK){
 		if(!obj1[key]==true && !obj2[key]==true){
      		check = true;
        }else if ((typeof obj1[key] == 'object') && (typeof obj2[key] == 'object')){
        	check = deepEqual(obj1[key], obj2[key]);
        } else{
        	check = (obj1[key] == obj2[key]);
        }
      	equal = equal && check;
    }
  	return equal;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true