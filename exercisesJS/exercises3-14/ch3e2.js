function add(...a){
    let result = 0;
    for (n of a){
        result += n;
    }
    return result;
}

let e = document.getElementsByClassName('exercise')[0];

e.innerHTML = 'add (1, 2) + add ( 1, 4, 6, 7, 2) = ' + String(add(1,2)+add(1,4,6,7,2));
