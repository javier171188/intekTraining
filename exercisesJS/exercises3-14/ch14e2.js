var content = document.querySelector('.content');
var button = document.querySelector('button');

document.getElementById('info').value = '';
button.addEventListener('click', setText);
setText();

function setText(){
    var numCols = document.getElementById('info').value;
    console.log(numCols);
    if (numCols === '2'){
        setCulumns(2);
    }
    if (numCols === '3'){
        setCulumns(3);
    }
    if (numCols === '4'){
        setCulumns(4);
    }
    document.getElementById('info').value = '';
}   


function setCulumns(n){
    var text = "The Blickling Park mausoleum is a Grade II listed building in the grounds of Blickling Hall, Norfolk, England. It was commissioned in 1793 by Lady Caroline Suffield, the daughter of John Hobart, 2nd Earl of Buckinghamshire, as a tomb for her father and his two wives. The structure was designed by the Italian architect Joseph Bonomi the Elder and built by Henry Wood. It is in the form of a pyramid, modelled on that of Cestius in Rome, as an early example of Egyptian Revival architecture. The structure is now in the ownership of the National Trust. The mausoleum was commissioned by Lady Caroline (wife of William Harbord, 2nd Baron Suffield), the eldest daughter of John Hobart, 2nd Earl of Buckinghamshire, in memory of her father who died in 1793. Caroline, who inherited her father's estate Blickling Hall, commissioned the Italian architect Joseph Bonomi the Elder to design the structure. Bonomi designed a mausoleum based on the ancient Pyramid of Cestius in Rome, in an early example of Egyptian Revival architecture. Bonomi exhibited his design drawings at the Royal Academy of Arts, they are now stored in Blickling Hall. The structure was erected between 1794 and 1796."
    var charPerColms = Math.floor(text.length/n);
    var widthCols = Math.floor(100/n) - 2;
    content.textContent = '';
    
    for(var i = 0; i < n-1; i++){
        var p = document.createElement('p');
        p.textContent = text.slice(i*charPerColms, (1+i)*charPerColms);
        if (text[(1+i)*charPerColms-1] !== ' ' && text[(1+i)*charPerColms] !== ' '){
            p.textContent += '-';
        }
        content.appendChild(p);
    }
    var p = document.createElement('p');
    p.textContent = text.slice(i*charPerColms, text.length);
    content.appendChild(p);

    var pars = document.querySelectorAll('p');
    for (var j=0; j< pars.length; j++){
        pars[j].style.width = String(widthCols)+'%';
    }
}