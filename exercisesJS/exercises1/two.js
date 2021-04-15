function limitFunc(fn, num){
    let counter = 0;
    function limiting(){
        if (counter< num){
            counter++;
            return fn();
        }
        return null;
    }
    return limiting;
}

e = document.getElementsByClassName("exercise")[0]

function fn(){
    e.innerHTML += 'I am being executed.';
    e.innerHTML += '<br/>';
    e.innerHTML += '<br/>';
}

var limited = limitFunc (fn, 2);
e.innerHTML += 'Execution 1 <br/>'
limited (); // executes fine
e.innerHTML += 'Execution 2 <br/>'
limited (); // executes fine
e.innerHTML += 'Execution 3 <br/>'
limited (); // does not execute
e.innerHTML += 'Execution 4 <br/>'
limited (); // does not execute
