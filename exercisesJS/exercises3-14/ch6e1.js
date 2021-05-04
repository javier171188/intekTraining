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
    constructor(passengers, topSpeed, size, name, currentSpeed=0){
        this.passengers = passengers;
        this.topSpeed = topSpeed;
        this.size = size;
        this.name = name;
        this.currentSpeed = currentSpeed;
    }
    move(speed){
        if (speed>this.topSpeed){
            speed = this.topSpeed;
        }
        this.currentSpeed = speed;
        console.log(`The vehicle ${this.name} is now moving with speed of ${this.currentSpeed}`);
    }
    stop(){
        this.currentSpeed = 0;
        console.log(`The vehicle ${this.name} has stopped.`)
    }
}

class  LandVehicle extends Vehicle{
    constructor(passengers, topSpeed, size, name, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
    }
}

class Train extends LandVehicle{
    constructor(passengers, topSpeed, size, name, railroad, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed);
        this.railroad = railroad;
    }
    changeRailroad(newRailroad){
        this.railroad = newRailroad;
        console.log(`The train ${this.name} has changed Lane to ${newRailroad}`)
    }
}

class WheeledVehicle extends LandVehicle{
    constructor(passengers, topSpeed, size, name, numberWheels, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed);
        this.numberWheels = numberWheels;
    }
    changeTires(){
        console.log(`${this.name} has now new tires.`)
    }
}

class AerialVehicle extends Vehicle{
    constructor(passengers, topSpeed, size, name, currentSpeed=0, height=0){
        super(passengers, topSpeed, size, name, currentSpeed=0)
        this.height = height;
    }
    rise(meters){
        this.height += meters;
        console.log(`The new height is ${this.height}`);
    }

    descend(meters){
        this.height -= meters;
        console.log(`The new height is ${this.height}`);
    }
}

class Airplane extends AerialVehicle{
    constructor(passengers, topSpeed, size, name, typeWing, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
        this.typeWing = typeWing;
    }
}

class Helicopter extends AerialVehicle{
    constructor(passengers, topSpeed, size, name, numberPropeller, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
        this.numberPropeller = numberPropeller;
    }
}

class WaterVehicle extends Vehicle{
    constructor(passengers, topSpeed, size, name, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
    }
}

class Boat extends WaterVehicle{
    constructor(passengers, topSpeed, size, name, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
    }
}

class Yacht extends Boat{
    constructor(passengers, topSpeed, size, name, pool, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
        this.pool = pool;
    }
}

class Submarine extends WaterVehicle{
    constructor(passengers, topSpeed, size, name, depth=0, currentSpeed=0){
        super(passengers, topSpeed, size, name, currentSpeed)
        this.depth = depth;
    }
    dive(meters){
        this.depth -= meters;
        console.log(`The new depth is ${this.depth}`);
    }
    goUp(meters){
        this.depth += meters;
        console.log(`The new depth is ${this.depth}`);
    }
}

e.innerHTML += '<br/>';
e.innerHTML += '<br/> We have the class Yacht, which inherits from Boat, which inherits from WaterVehicle which inherits from Vehicle. <br/>';
let y = new Yacht(25, 100, 'big', 'y', true);
e.innerHTML += "<br/>Example: let y = new Yacht(25, 100, 'big', 'y', true); results in a tacht with properties:<br/>";
for (p in y){
    e.innerHTML += `${p}: ${y[p]} <br/>`;
}
e.innerHTML += '<br/> Now we increase the speed with  y.move(200), and the result is: <br/>';
y.move(200);
for (p in y){
    e.innerHTML += `${p}: ${y[p]} <br/>`;
}