let e = document.getElementsByClassName('exercise')[0];

function distance(x,y,a,b,c,d){
    let distance;
    if (Array.isArray(x)){
        if(x.length != y.length){
            throw 'incompatible point data';
        }
        distance = 0;
        for(let i in x){
            distance += (x[i]-y[i])*(x[i]-y[i]);
        }
        distance = Math.sqrt(distance);
        return distance;
    }

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


e.innerHTML += `distance (1, 2, 2, 2) = ${distance (1, 2, 2, 2)} <br/>`;
e.innerHTML += `distance ([1,2], [2,2]) = ${distance ([1,2], [2,2])} <br/>`;
e.innerHTML += `distance ([1,2,4], [2,2,5]) = ${distance ([1,2,4], [2,2,5])} <br/>`;
e.innerHTML += `distance ([1,2], [2,2,4]) -> Uncaught incompatible point data
distance<br/>`;