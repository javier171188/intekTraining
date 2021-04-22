function setAtributes(color='blue',fontSize=10, bgColor='red'){
    this.style.color = color;
    this.style.backgroundColor = bgColor;
    this.style.fontSize = String(fontSize) +  'px';
}


let e = document.getElementsByClassName('exercise')[0];
setAtributes.call(e, 'red', 50, 'blue');  