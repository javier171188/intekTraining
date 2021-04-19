let e = document.getElementsByClassName('exercisea')[0]
e.innerHTML += 'Input: aBc, <br/>';

function cycle(s){
    let dict = {'a':'b', 'b':'c' , 'c':'d' , 'd':'e' , 'e':'f' , 'f':'g' , 'g':'h',
     'h':'i' , 'i':'j' , 'j':'k' , 'k':'l', 'l': 'm', 'm':'n' , 'n':'o' , 'o':'p' , 
     'p':'q' , 'q':'r' , 'r':'s' , 's':'t' , 't':'u' , 'u':'v' , 'v':'w', 'w':'x',
     'x':'y',   'y':'z', 'z':'a', '1':'2','2':'3','3':'4','4':'5','5':'6','6':'7',
     '7':'8','8':'9','9':'0','0':'1', 'A':'B','B':'C','C':'D','D':'E','E':'F','F':'G',
     'G':'G','H':'I','I':'J', 'J':'K','K':'L', 'L':'M','M':'N','N':'O','O':'P','P':'Q',
     'Q':'R', 'R':'S','S':'T' ,'T':'U','U':'V','V':'W','W':'X','X':'Y','Y':'Z','Z':'A' }
    let newS = '' 
    for (l of s){
        newS += dict[l];
    }
    return newS;
}

e.innerHTML += `Output: ${cycle('aBc')}.`;
e.innerHTML += '<br/> <br/>';
e.innerHTML += `Input: xyz, <br/> Output: ${cycle('xyz')}`;
e.innerHTML += '<br/> <br/>';
e.innerHTML += `Input: aK89, <br/> Output: ${cycle('aK89')}`;

// ###############################################################
document.getElementById('userword').value = 'Lisa'; 
let t = document.getElementById("text");
let originalText = t.innerHTML;
function replaceWord(){
    w = document.getElementById('userword').value;
    let s = '\\b'+w+'\\b';
    let regex = new RegExp(s,"gm");
    newText = originalText.replaceAll(regex, `<a href="https://twitter.com/search?q=${w}">#${w}</a>`);
    t.innerHTML = newText;
    
}
b = document.getElementById("wordb");
b.addEventListener("click", replaceWord, false);
// ####################################################################
let c = document.getElementsByClassName('exercisec')[0]
let someText = 'Some words: new, cat, repaper, rotator, advanced, company, rotor, sagas, solos, stats, tenet, house, car, run';
c.innerHTML += someText;


function isPalindrome(s){
    s = s.toLowerCase();
    let len = Math.floor(s.length/2);
    let exp='';
    for (let i = 0; i < len; i++){
        exp += '(.)';
    }
    if ( !(len === s.length/2)) exp += '(.)';
    for(let i = len; i>0; i--){
        exp += `\\${i}`;
    }
    let regex = new RegExp(exp,"gm");
    let palindrome = s.match(regex);
    return Boolean(palindrome);
}

function getPalindromes(t){
    t = t.replaceAll(',', '').replaceAll('.','').replaceAll(':','').replaceAll(';','');
    t = t.replaceAll('!','').replaceAll('?','');
    let words = t.split(' ');
    let palindromes = [];
    for(word of words){
        if (isPalindrome(word)) palindromes.push(word);
    }
    return palindromes;
}

c.innerHTML += '<br/>';
c.innerHTML += 'From which we have the palidromes: '
if (getPalindromes(someText)){
    for (word of getPalindromes(someText)){
        c.innerHTML += `${word}, `
    }
}
c.innerHTML = c.innerHTML.slice(0,c.innerHTML.length-2);