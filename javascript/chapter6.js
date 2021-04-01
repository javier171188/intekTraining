// Your code here.

class Vec {
    constructor(x,y){
        this.x = x;
      this.y = y;
  }
    
    plus(vec){
      return new Vec(this.x + vec.x, this.y + vec.y);
    }
    
    minus(vec){
      return new Vec(this.x - vec.x, this.y - vec.y);
    }
    
    get length(){
      return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    
    toString(){
      return `Vec{x: ${this.x} , y: ${this.y}}`;
    }
  }
  
  Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
  };
  
  
  
  
  //##############################################
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5


  class Group {
    // Your code here.
    constructor(){
      this.collection = [];    
    }
    
    add(number){
      if (!(this.collection.includes(number))){
          this.collection.push(number);
      }
    }
    
    delete(number){
      this.collection = this.collection.filter(e => e != number);
    }
    
    has(number){
        return this.collection.includes(number);
    }
    
    static from(array){
      let setElements = new Group();
      for(let e of array){
          setElements.add(e);
      }
      return setElements;
    }
  }
  
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false




  // Your code here (and the code from the previous exercise)
class Group {
    // Your code here.
    constructor(){
      this.collection = [];    
    }
    
    add(number){
      if (!(this.collection.includes(number))){
          this.collection.push(number);
      }
    }
    
    delete(number){
      this.collection = this.collection.filter(e => e != number);
    }
    
    has(number){
        return this.collection.includes(number);
    }
    
    static from(array){
      let setElements = new Group();
      for(let e of array){
          setElements.add(e);
      }
      return setElements;
    }
  }
  
  
  class GroupIterator{
    constructor(group){
      this.index = -1;
      this.group = group;
    }
    
    next(){
      if(this.index === this.group.collection.length -1) return {done: true};
      this.index++;
      return {value:this.group.collection[this.index], done:false};
    }
  }
  
  Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  };
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c


  let map = {one: true, two: true, hasOwnProperty: true};


// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map,"one"))
console.log(map.hasOwnProperty("one"));
// → true