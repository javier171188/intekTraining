let e = document.getElementsByClassName('exercise')[0];


for (let i=0; i<25; i++){
    e.innerHTML += `<div class ="element">${i}<div/>`;
}

e.addEventListener('click', function(ev){
    let inText = ev.target.innerHTML;
    inText = inText.replace('<div></div>','');
    console.log(inText);
    window.alert(inText);
})