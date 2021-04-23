let e = document.getElementsByClassName('exercise')[0];


function mainFunction(){
    let counter = 0;
    function wrapper(fa,fb,fc,pa,pb,pc){
        counter++;
        if (counter%2 == 0){
            fa(...pa);
        }
        if (counter%4 == 0){
            fb(...pb);
        }
        if (counter%5 == 0){
            fc(...pc);
        }
        e.innerHTML += '<br/>';
        if (counter == 20) counter = 0;
    }
    return wrapper;
}

let executionFunction = mainFunction();

function firstFunction(a,b){
    console.log('First function executed with parameters: ', a, b);
    e.innerHTML += `First function executed with parameters: ${a}, ${b} <br/>`;
}
function secondFunction(a,b){
    console.log('Second function executed with parameters: ', a, b);
    e.innerHTML += `Second function executed with parameters: ${a}, ${b} <br/>`;
}
function thirdFunction(a,b){
    console.log('Third function executed with parameters: ', a, b);
    e.innerHTML += `Third function executed with parameters: ${a}, ${b} <br/>`;
}

setInterval(executionFunction, 15000, firstFunction,secondFunction,thirdFunction, ['a','b'], ['c','d'], ['e','f']);