let objA = {'a':1, 'b':2};
let objB = {'p1':'s', 'p2': 4, 'p3':'a', 'c':3};

e = document.getElementsByClassName('exercise')[0]

e.innerHTML = 'The object A is: {';
for (let i in objA){
    e.innerHTML += String(i)+ ':' +String(objA[i]) + ', ';
}
e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length -2) + '}';

e.innerHTML += '<br/>';

e.innerHTML += 'The object B is: {';
for (let i in objB){
    e.innerHTML += String(i)+ ':' +String(objB[i]) + ', ';
}
e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length -2) + '}';

function copyProp(obj1, obj2, props = false){
    if (!props){
        for (let p in obj2){
            obj1[p] = obj2[p];
        }
    } else {
        for (let p of props){
            obj1[p] = obj2[p];
        }
    }
}

e.innerHTML += '<br/>';
e.innerHTML += '<br/>';
copyProp(objA, objB)
e.innerHTML += 'If we copy all the properties, the result is: {';
for (let i in objA){
    e.innerHTML += String(i)+ ':' +String(objA[i]) + ', ';
}
e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length -2) + '}';
e.innerHTML += '<br/>';
e.innerHTML += '<br/>';

e.innerHTML += 'If we only copy the properties p1 and p2, the result is: {';
objA = {'a':1, 'b':2};
objB = {'p1':'s', 'p2': 4, 'p3':'a', 'c':3};
copyProp(objA, objB, ['p1','p2']);
for (let i in objA){
    e.innerHTML += String(i)+ ':' +String(objA[i]) + ', ';
}
e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length -2) + '}';