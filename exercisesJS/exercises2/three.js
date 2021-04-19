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
    regex = new RegExp(s,"gm");
    newText = originalText.replaceAll(regex, `<a href="https://twitter.com/search?q=${w}">#${w}</a>`);
    t.innerHTML = newText;
    
}
b = document.getElementById("wordb");
b.addEventListener("click", replaceWord, false);