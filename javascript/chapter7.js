function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    function numberSteps(state, robot, memory) {
      for (let turn = 0;; turn++) {
        if (state.parcels.length == 0){
          return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`); 
      }
    }
    let steps1 = 0, steps2 = 0;
    for(var i = 1; i<=100; i++){
        village = VillageState.random();
      steps1 += numberSteps(village, robot1, memory1);
      steps2 += numberSteps(village, robot2, memory2);
    }
    console.log('robot 1 took ', steps1/i, 'in average.');
    console.log('robot 2 took ', steps2/i, 'in average.');
  }
  
  compareRobots(routeRobot, [], goalOrientedRobot, []);



  // Your code here
function yourRobot({place, parcels}, route) {
    if (route.length == 0) {
      var minRoute = [];
      for(let parcel of parcels){
          if (parcel.place != place) {
                route = findRoute(roadGraph, place, parcel.place);
          } else {
                route = findRoute(roadGraph, place, parcel.address);
          }
           if (minRoute.length === 0 ){
              minRoute = route.slice(0);
          }else if(route.length < minRoute.length){
              minRoute = route.slice(0);     
          } 
      }
      route = minRoute.slice(0);
    }
    return {direction: route[0], memory: route.slice(1)};
  }
  
  
  
  runRobotAnimation(VillageState.random(), yourRobot, []);


  class PGroup {
    // Your code here
    constructor(collection){
      this.collection = collection;    
    }
    
    add(number){
      if (!(this.collection.includes(number))){
            let newCollection = this.collection.concat([number]);
            return new PGroup(newCollection);
      }
      return new PGroup(this.collection);
      
    }
    
    delete(number){
      let newCollection = this.collection.filter(e => e != number);
      return new PGroup(newCollection);
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
  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false