// Your code here.
let numeral = "#";
while (numeral.length < 8){
	console.log(numeral);
  	numeral += '#';
}
      
// Your code here.
// Just prints Fizz or Buzz
/*for (let i = 1; i <= 100; i++){
  if (i%3==0){
  	console.log("Fizz");
  } else if(i%5 == 0){
  	console.log("Buzz");
  }
  else{
  	console.log(i);
  }
} */

//prints Fizz and Buzz when it is divisible by 3 and 5

for (let i = 1; i <= 100; i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
  }


  // Your code here.
let cell = "";
let size = 10;
for (let j = 1; j<=size; j++){
  for (let i = 1; i<=size; i++){
    if (j%2==1){
      if(i%2==0){
          cell += '#';
        }
        else{
          cell += ' ';
        }
    } else{
      if(i%2==1){
            cell += '#';
          }
          else{
            cell += ' ';
          }
    }
      
  }
  cell += '\n'
}

console.log(cell);