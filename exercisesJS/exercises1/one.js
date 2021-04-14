let e = document.getElementsByClassName("exercise")[0]

let array = ['after', 'zoo', 'house','car', 'space', 'bear','d','exercises'];

e.innerHTML += 'The original array is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'

function customOrdering(inputArray, how = 'alphA'){
    function numberConsonants(s){
        let consonants = "bcdfghjklmnpqrstvwxyz";
        s  = s.toLowerCase();
        let count = 0;
        for (let l of s){
            if(consonants.indexOf(l)>=0){
                count++;
            }
        }
        return count;
    }
    switch(how){
       case 'alphA':
           inputArray.sort();
       break; 
       case 'alphD':
            inputArray.sort().reverse();
       break; 
       case 'lenA':
            inputArray.sort(function(a, b){return a.length-b.length});
       break; 
       case 'lenD':
            inputArray.sort(function(a, b){return -a.length+b.length});
       break; 
       case 'consA':
            inputArray.sort(function(a, b){return numberConsonants(a) -numberConsonants(b)});
       break; 
       case 'consD':
            inputArray.sort(function(a, b){return -numberConsonants(a) + numberConsonants(b)});
   }
}


customOrdering(array);
e.innerHTML += 'The array ordered alphabetically in ascending order is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'

array = ['after', 'zoo', 'house','car', 'space', 'bear','d','exercises'];
customOrdering(array, 'alphD');
e.innerHTML += 'The array ordered alphabetically in descending order is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'

array = ['after', 'zoo', 'house','car', 'space', 'bear','d','exercises'];
customOrdering(array, 'lenA');
e.innerHTML += 'The array ordered by length in ascending order is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'


array = ['after', 'zoo', 'house','car', 'space', 'bear','d','exercises'];
customOrdering(array, 'lenD');
e.innerHTML += 'The array ordered by length in descending order is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'

array = ['after', 'zoo', 'house','car', 'space', 'bear','d','exercises'];
customOrdering(array, 'consA');
e.innerHTML += 'The array ordered by number of consonants in ascending order is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'

array = ['after', 'zoo', 'house','car', 'space', 'bear','d','exercises'];
customOrdering(array, 'consD');
e.innerHTML += 'The array ordered by number of consonants in descending order is: ['+ array + ']';
e.innerHTML += '<br/>'
e.innerHTML += '<br/>'