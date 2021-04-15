function setAtributes(className = 'title',color='blue',fontSize=10, bgColor='red'){
    let obj = {element:document.getElementsByClassName(className)[0],
                fun: function(){
                        this.element.style.color = color;
                        this.element.style.backgroundColor = bgColor;
                        this.element.style.fontSize = String(fontSize) +  'px';
                }

    }
    obj.fun()
}
setAtributes('exercise', 'blue', 20, 'black');