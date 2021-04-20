let e = document.getElementsByClassName('exercise')[0];
let a=1, b=2, c=3;

let myMath = {add: (...numbers)=> {
                    let result = 0;
                    for (let number of numbers){
                        result += number;
                    }
                    return result;
                    },
             mul: (...numbers)=>{
                 let result = 1;
                 for (let number of numbers){
                     result *= number;
                 }
                 return result;
                },
            fact: (n) => {
                let result =1;
                for(let i =2; i <= n; i++){
                    result *= i;
                }
            return result;}
                };

e.innerHTML = `myMath.add(${a}, ${b}, ${c}) = ${myMath.add(a,b,c)} <br/>`;
e.innerHTML += `myMath.mul(${a}, ${b}, ${c}) = ${myMath.mul(a,b,c)} <br/>`;
e.innerHTML += `myMath.fact(${c}) = ${myMath.fact(c)} <br/>`;
