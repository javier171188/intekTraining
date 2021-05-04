let e = document.querySelector('.exercise');


var fragment = new DocumentFragment()
for (let i=0; i<25; i++){
    var div = document.createElement('div');
    div.setAttribute('class', "element");
    div.textContent = i;
    fragment.appendChild(div);
}
e.appendChild(fragment);

e.addEventListener('click', function(ev){
    let inText = ev.target.innerHTML;
    inText = inText.replace('<div></div>','');
    console.log(inText);
    window.alert(inText);
})