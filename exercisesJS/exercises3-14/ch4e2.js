let e = document.getElementsByClassName('exercise')[0];

e.innerHTML = 'var arr = [ 1, 3, 5, 7]; <br/>';
var arr = [ 1, 3, 5, 7];
e.innerHTML += 'var sum = addRec (arr); <br/>';

function addRec(arr, index=0, s=0){
    s += arr[index];
    if (arr.length -1 === index){
        return s;
    }
    return addRec(arr, index+1, s);
}

e.innerHTML += `sum: ${addRec(arr)}`;