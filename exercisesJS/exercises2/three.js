e = document.getElementsByClassName('exercise')[0]
e.innerHTML = 'Input: aBc';

function cycle(s){
    let dict = {'a':'b', 'b':'c' , 'c':'d' , 'd':'e' , 'e':'f' , 'f':'g' , 'g':'h',
     'h':'i' , 'i':'j' , 'j':'k' , 'k':'l', 'l': 'm', 'm':'n' , 'n':'o' , 'o':'p' , 
     'p':'q' , 'q':'r' , 'r':'s' , 's':'t' , 't':'u' , 'u':'v' , 'v':'w', 'w':'x',
     'x':'y',
     'y':'z', 'z':'a', '1','2','3','4','5','6','7','8','9','0' }
    for (l of s){
        console.log(l);
    }
}

cycle('aBc')