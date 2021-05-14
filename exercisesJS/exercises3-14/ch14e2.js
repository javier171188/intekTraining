var options = document.querySelector('.options');
var content = document.querySelector('.content');
var expl = document.querySelector('.expl');



setButtons();
options.addEventListener('click', setText);
setText();

function setButtons(){
    var inTwo = document.createElement('input');
    inTwo.setAttribute('type','radio');
    inTwo.setAttribute('name','position');
    inTwo.setAttribute('id','two');
    inTwo.checked = false;
    var labTwo = document.createElement('label');
    labTwo.setAttribute('class','marker');
    labTwo.setAttribute('for','two');
    labTwo.textContent = 'Two';
    var inThree = document.createElement('input');
    inThree.setAttribute('type','radio');
    inThree.setAttribute('name','position');
    inThree.setAttribute('id','three');
    inThree.checked = false;
    var labThree = document.createElement('label');
    labThree.setAttribute('class','marker');
    labThree.setAttribute('for','three');
    labThree.textContent = 'Three';
    var inFour = document.createElement('input');
    inFour.setAttribute('type','radio');
    inFour.setAttribute('name','position');
    inFour.setAttribute('id','four');
    inFour.checked = false;
    var labFour = document.createElement('label');
    labFour.setAttribute('class','marker');
    labFour.setAttribute('for','four');
    labFour.textContent = 'Four';
    options.appendChild(inTwo);
    options.appendChild(labTwo);
    options.appendChild(inThree);
    options.appendChild(labThree);
    options.appendChild(inFour);
    options.appendChild(labFour);
}


/* <input type="radio" name="position" id="two" >
        <label class="marker" for="two" >Two</label>
           
        <input type="radio" name="position" id="three" >
        <label class="marker" for="three">Three</label>
            

        <input type="radio" name="position" id="four">
        <label class="marker" for="four">Four</label> */


function setText(){
    var two = document.getElementById('two').checked;
    var three = document.getElementById('three').checked;
    var four = document.getElementById('four').checked;
    expl.innerHTML = '';
    expl.innerHTML += two +'<br/>';
    expl.innerHTML += three +'<br/>';
    expl.innerHTML += four +'<br/>';
    if (two){
        setCulumns(2);
    }
    if (three){
        setCulumns(3);
    }
    if (four){
        setCulumns(4);
    }
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