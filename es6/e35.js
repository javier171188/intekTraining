'use strict';
let table = document.querySelector('table');
let nodeRaws = document.querySelectorAll('tr');
let head = nodeRaws[0];
let nameH = head.querySelector('td'),
    ageH = head.querySelectorAll('td')[1];

ageH.addEventListener('click', sortByAge);
nameH.addEventListener('click',sortbyName);

function sortByAge(){
    let nodes = [].slice.call(nodeRaws, 1); 

    for (let i = 1;  i < nodeRaws.length; i++){
        nodeRaws[i].remove();
    }
    nodes.sort(sortAge);
    for (let n of nodes){
        table.appendChild(n);
    }
}

function sortbyName(){
    let nodes = [].slice.call(nodeRaws, 1); 

    for (let i = 1;  i < nodeRaws.length; i++){
        nodeRaws[i].remove();
    }
    nodes.sort(sortName);
    for (let n of nodes){
        table.appendChild(n);
    }
}

function sortName(a,b){
    let nameA = a.querySelectorAll('td')[0].textContent;
    let nameB = b.querySelectorAll('td')[0].textContent;
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
}

function sortAge(a,b){
    let ageA = a.querySelectorAll('td')[1].textContent;
    let ageB = b.querySelectorAll('td')[1].textContent;
    let numA = parseInt(ageA);
    let numB = parseInt(ageB);
    return numA - numB;
}