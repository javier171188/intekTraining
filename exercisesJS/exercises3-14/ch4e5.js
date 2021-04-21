let e = document.getElementsByClassName('exercise')[0];

e.innerHTML = 'var x1 = 1, y1 = 2, z1 = 1; <br/>';
e.innerHTML += 'var x2 = 2, y2 = 2, z2 = 4; <br/>';

var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;



function distance(x,y,a,b,c,d){
    let distance;
    if (typeof d != 'number' && typeof c === 'number' ) {
        throw 'Insufficient parameters';
    }
    if (typeof b != 'number') {
        throw 'Insufficient parameters';
    }
    if (typeof c != 'number' && typeof d != 'number') {
        distance = Math.sqrt((x-a)*(x-a) + (y-b)*(y-b));
        return distance;
    }
    distance = Math.sqrt((x-b)*(x-b) + (y-c)*(y-c) +(a-d)*(a-d))
    return distance;
}
var delta1 = distance (x1, y1, x2, y2); // delta = 1
var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622…
e.innerHTML += '<br/> var delta1 = distance (x1, y1, x2, y2) <br/>';
e.innerHTML += `delta1: ${delta1} <br/>`;

e.innerHTML += '<br/> var delta2 = distance (x1, y1, z1, x2, y2, z2); <br/>';
e.innerHTML += `delta2: ${delta2} <br/>`;

e.innerHTML += `<br/> distance (x1, x2): Uncaught Insufficient parameters`;

console.log(delta1);
console.log(delta2)
distance (x1, x2);