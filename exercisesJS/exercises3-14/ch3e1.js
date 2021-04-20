let e = document.getElementsByClassName('exercise')[0]
e.innerHTML = 'The input numbers are: ';
let a = 9;
let b = 6;

e.innerHTML += a + ', ' + b;

function toBaseT(n){
    let digits = [];
    let r;
    let baseT = '';
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
        
    for (let l in digits){
        baseT += String(digits[digits.length-l-1]);
    }
    return(baseT);

}

function mul(x1,x2){
    let r = x1*x2;
    return toBaseT(r);
}

e.innerHTML += '<br/>'
e.innerHTML += 'The multipication in base 13 is: ' + mul(a,b);