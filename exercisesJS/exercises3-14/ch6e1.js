let e = document.getElementsByClassName('exercise')[0];


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

class RegularPolygon extends Shape{
    constructor(side, apothem, edges){
        super(edges*side, edges*side*apothem/2, edges);
        this.apothem = apothem;
        this.side = side;
    }
}


class Triangle extends Shape{
    constructor(l1,l2,l3){
        let s = (l1+l2+l3)/2;
        let a = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
        super(2*s, a,3)
        this.base = l1;
        this.height = 2*a/l1;
    }
}

class Circle extends Shape{
    constructor(radio){
        super(2*Math.PI*radio, Math.PI*radio*radio, Infinity);
        this.radio = radio;
    }    
}

class Quadrilateral extends Shape{
    constructor(perimeter, area){
        super(perimeter, area, 4);
        
    }
}

class Parallelogram extends Quadrilateral{
    constructor(l1, l2, angle){
        super(2*(l1+l2), l1*l2*Math.sin(angle));
        this.base = l1;
        this.height = l2*Math.sin(angle);
    }
}

class Rectangle extends Parallelogram{
    constructor(base,height){
        super(base, height, Math.PI/2)
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
        this.side = side;
    }
}

let c = new Circle(1);
console.log(c);
let q = new Quadrilateral(2,4);
console.log(q);
let p = new Parallelogram(5,8,Math.PI/4);
console.log(p);
let r = new Rectangle(5,10);
console.log(r);
let s = new Square(3);
console.log(s);
let t = new Triangle(3,4,5);
console.log(t);
let rp = new RegularPolygon(1, 1, 5);
console.log(rp);

e.innerHTML = 'We have the class Square, which inherits from Rectangle, which inherits from Parallelogram, which inherits from Quadrilateral, which inherits from Shape.';
e.innerHTML += '<br/> <br/>Example: let s = new Square(3); results in a square with properties: <br/>' ;
for (p in s){
    e.innerHTML += `${p}: ${s[p]} <br/>`;
}

class Vehicle{
    constructor(passengers, speed, size, name){
        this.passengers = passengers;
        this.topSpeed = speed;
        this.size = size;
        this.name = name;
    }
    move(speed){
        if (speed>this.speed){
            speed = this.speed;
        }
        console.log(`The vehicle ${this.name} is now moving with speed of ${speed}`);
    }
}

class  landVehicle extends Vehicle{
    constructor(passengers, speed, size, name){
        super(passengers, speed, size, name)
    }
}

class aerialVehicle extends Vehicle{
    constructor(passengers, speed, size, name){
        super(passengers, speed, size, name)
    }
}

class waterVehicle extends Vehicle{
    constructor(passengers, speed, size, name){
        super(passengers, speed, size, name)
    }
}

class Train extends landVehicle{
    constructor(passengers, speed, size, name, railroad){
        super(passengers, speed, size, name)
        this.railroad = railroad;
    }
    changeRailroad(newRailroad){
        console.log(`The train ${this.name} has changed Lane to ${this.railroad}`)
    }
}