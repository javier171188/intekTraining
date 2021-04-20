let e = document.getElementsByClassName('exercise')[0];

e.innerHTML = 'var arr = [ 1, 3, 5, 7]; <br/>';
var arr = [ 1, 3, 5, 7];
e.innerHTML += 'var sum = addRec (arr); <br/>';

function addRec(arr){
    if (arr.length === 0){
        return 0;
    }
    return arr[0] + addRec(arr.slice(1));
}

e.innerHTML += `sum: ${addRec(arr)}`;