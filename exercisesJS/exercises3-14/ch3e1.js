let e = document.getElementsByClassName('exercise')[0]
e.innerHTML = 'The input numbers are: ';
let a = 9;
let b = 6;

e.innerHTML += a + ', ' + b;

function toBaseT(n){
    let digits = [];
    let r;
    while(n>0){
        r = n%13;
        if (r==12){
            digits.push('C');
        } else if (r==11){
            digits.push('B');
        }else if (r==10){
            digits.push('A')
        }else{
            digits.push(r);
        }

        
        n = Math.floor(n/13);
    }
    
    console.log(digits);
}

function mul(x1,x2){
    let r = x1*x2;

}

toBaseT(947)