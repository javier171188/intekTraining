let e = document.getElementsByClassName('exercise')[0]
e.innerHTML = 'The input numbers are: ';
let a = 9;
let b = 6;

e.innerHTML += a + ', ' + b;


function mul(x1,x2){
    let r = x1*x2;
    return r.toString(13);
}

e.innerHTML += '<br/>'
e.innerHTML += 'The multipication in base 13 is: ' + mul(a,b);