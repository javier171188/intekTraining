let e = document.getElementsByClassName('exercise')[0];



function dataType(...elements){
    for (element of elements){
        console.log(element, typeof element);
        e.innerHTML += `${element}: ${typeof element} <br/>`;
    }
}

e.innerHTML = 'dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); <br/>';
e.innerHTML += '<br/>';
dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 
