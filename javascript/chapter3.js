// Your code here.
/*
function min(a,b){
	if (a<=b){
      return a;
    } else{
      return b;	
    }
}*/

/*const min = function(a,b){
  if (a<=b){
      return a;
  } else{
      return b;	
  }
}*/

let min = (a,b) => {
    if (a<=b){
        return a;
    } else{
        return b;	
    }
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

  // Your code here.

/*function isEven(n){
  	if (n < 0) n = -n;
  
	if (n === 0){
    	return true;
    }else if (n == 1){
    	return false;
    }
  	return isEven(n-2);
}*/

/*const isEven = function(n){
	if (n < 0) n = -n;
  
	if (n === 0){
    	return true;
    }else if (n == 1){
    	return false;
    }
  	return isEven(n-2);
}*/

let isEven = n => {
	if (n < 0) n = -n;
  
	if (n === 0){
    	return true;
    }else if (n == 1){
    	return false;
    }
  	return isEven(n-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Your code here.
/*
function countBs(string){
  let count = 0;
  for (let i=0; i < string.length; i++){
    	if (string[i] == "B"){
        	count += 1;
        }
  }
  return count;
}

function countChar(string, char){
	let count = 0;
  	for (let i=0; i < string.length; i++){
    	if (string[i] == char){
        	count += 1;
        }
    }
    return count;
}*/

/*
const countBs = function(string){
  let count = 0;
  for (let i=0; i < string.length; i++){
    	if (string[i] == "B"){
        	count += 1;
        }
  }
  return count;
}

const countChar = function(string, char){
	let count = 0;
  	for (let i=0; i < string.length; i++){
    	if (string[i] == char){
        	count += 1;
        }
    }
    return count;
} */

let countBs = (string) => {
    let count = 0;
    for (let i=0; i < string.length; i++){
          if (string[i] == "B"){
              count += 1;
          }
    }
    return count;
  }
  
  let countChar = (string, char) =>{
      let count = 0;
        for (let i=0; i < string.length; i++){
          if (string[i] == char){
              count += 1;
          }
      }
      return count;
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4