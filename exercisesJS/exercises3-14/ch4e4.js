let e = document.getElementsByClassName('exercise')[0];


function dataType(...elements){
    let theType;
    for (element of elements){
        if (typeof element === 'number'){
            if (Number.isInteger(element)){
                theType = 'number';
            }else{
                theType = 'float';
            }
        }
        else if (typeof element === 'object'){
            if (Array.isArray(element)){
                theType = 'array';
            } else{
                theType = 'object';
            }
        }else{
            theType = typeof element;
        }
        console.log(element, theType);
        e.innerHTML += `${element}: ${theType} <br/>`;
    }
}

e.innerHTML = 'dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); <br/>';
e.innerHTML += '<br/>';
dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 
