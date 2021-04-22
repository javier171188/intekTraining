function limitFunc(fn, num){
    let counter = 0;
    let r;
    function limiting(...input){
        if (counter< num){
            counter++;
            r = fn(...input)
            return r;
        }
        throw 'This function has reached its limit of ejecutions';
    }
    return limiting;
}

e = document.getElementsByClassName("exercise")[0]

function sum(a,b){
    return a+b;
}

var limited = limitFunc (sum, 2);
e.innerHTML += 'Execution 1 <br/>'
e.innerHTML += `${(limited (1,1))} <br/>`; // executes fine
e.innerHTML += 'Execution 2 <br/>'
e.innerHTML += `${(limited (1,2))} <br/>`; // executes fine
e.innerHTML += 'Execution 3 <br/>'
e.innerHTML += `${(limited (1,3))} <br/>`; // does not execute
e.innerHTML += 'Execution 4 <br/>'
e.innerHTML += `${(limited (1,4))} <br/>`;// does not execute
