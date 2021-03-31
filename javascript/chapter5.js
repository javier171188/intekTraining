let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function reducer(array1,array2){
	array3 = array1.concat(array2);
  	return array3;
}

console.log(arrays.reduce(reducer));

// → [1, 2, 3, 4, 5, 6]

// Your code here.
function loop(value, testF, updateF, bodyF){
	for (let val=value; testF(val); val= updateF(val)){
    	bodyF(val);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function every(array, test) {
    // Your code here.
    for (let e of array){
      if (!test(e)) return false;
    }
    return true;
  }
  
  function every(array, test){
      let check = e => !test(e);
      
      if (array.some(check)) return false;
        return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true


  function dominantDirection(text) {
    // Your code here.
    function textScripts(text) {
      let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
      }).filter(({name}) => name != "none");
    
      let total = scripts.reduce((n, {count}) => n + count, 0);
      if (total == 0) return "No scripts found";
    
      return scripts;
    }
    
    languages = textScripts(text);
    
    for (language of languages){
      language['direction'] = SCRIPTS.filter(l => l['name'] == language['name'])[0]['direction'];
    }
    
    let counts = {ltr:0};
    for (language of languages){
        if (language['direction'] in Object.keys(counts)){
          counts[language['direction']] += language['count'];
      }
      else{
          counts[language['direction']] = language['count'];
      }
    }
    
    max = Math.max(...Object.values(counts));
    
    for (k of Object.keys(counts)){
      if (counts[k] == max)  return k;
    }
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl