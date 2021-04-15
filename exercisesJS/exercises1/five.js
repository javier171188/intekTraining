function giveNumber(value){
    if (typeof value == 'string'){
        value = value.toLowerCase()
        let counter = 0;
        for(let i of value){
            if ('aeiou'.indexOf(i)>=0){
                counter++;
            }
        } 
    return counter;
    } else if(typeof value == 'number'){
        let number = Math.log10(value)+1;
        return Math.floor(number);
    } else{
        console.log('This function only accepts strings and integers.')
    }
}

e = document.getElementsByClassName('exercise')[0]

e.innerHTML = 'The string "testing" has ';
e.innerHTML += String(giveNumber('testing')) + ' vowels.';
e.innerHTML += '<br/>';
e.innerHTML += '<br/>';

e.innerHTML += 'The number 700 has ' + String(giveNumber(700)) +' digits.';
