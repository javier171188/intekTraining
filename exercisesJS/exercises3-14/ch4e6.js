let e = document.getElementsByClassName('exercise')[0];

function distance(x,y,a,b,c,d){
    let numParameters = arguments.length;
    if(Array.isArray(x)){
        if (x.length === y.length){
            let dis = 0;
            for(let i in x){
                dis += (x[i]-y[i])*(x[i]-y[i]);
            }
            dis = Math.sqrt(dis);
            return dis;
        }
        else{
            throw 'incompatible point data';
        }
    }
    if (numParameters<4) throw 'Insufficient parameters';
    if (numParameters !== 4 && numParameters !== 6) throw 'Incompatible number of parameters';
    if (numParameters === 4){
        return Math.sqrt((x-a)*(x-a) + (y-b)*(y-b));
    }
    if (numParameters === 6){
        return Math.sqrt((x-b)*(x-b) + (y-c)*(y-c) +(a-d)*(a-d));
    }
}


e.innerHTML += `distance (1, 2, 2, 2) = ${distance (1, 2, 2, 2)} <br/>`;
e.innerHTML += `distance ([1,2], [2,2]) = ${distance ([1,2], [2,2])} <br/>`;
e.innerHTML += `distance ([1,2,4], [2,2,5]) = ${distance ([1,2,4], [2,2,5])} <br/>`;
e.innerHTML += `distance ([1,2], [2,2,4]) -> Uncaught incompatible point data
distance<br/>`;