let e = document.getElementsByClassName('exercise')[0];

e.innerHTML = 'Ready to code';

class Shape{
    constructor(perimeter, area, edges){
        this.edges = edges;
        this.perimeter = perimeter;
        this.area = area;
    }
    display(){
        console.log(this.edges);
    }
}


class Circle extends Shape{
    constructor(radio){
    this.radio = radio;
    this.area = Math.PI*this.radio*this.radio;
    this.perimeter = 2*Math.PI*this.radio;
    }    
}

let c = new Circle(1);
console.log(c);