'use strict';
let addButton = document.getElementById('adding-button');
let table = document.querySelector('.candidates');
let nameCont = document.getElementById('name');
let lastNameCont = document.getElementById('last-name');
let phoneCont = document.getElementById('phone');
let inputArea = document.querySelector('.inputs');
let modifyArea = document.querySelector('.modify');
let changeButton = document.getElementById('change-button');

var fakeData = {
    1:{name: {
        firstname: 'John',
        lastname: 'Galt',
        phone: '123-456-7890'
             }
        }
};

fetch('#').then(fillInTable(fakeData));


addButton.addEventListener('click', addCandidate);
table.addEventListener('click',tableClicked);

function tableClicked(event){
    let clicked = event.target;
    let cId = clicked.getAttribute('id');
    let modifyName = document.getElementById('modify-name');
    let modifyLastName = document.getElementById('modify-last-name');
    let modifyPhone = document.getElementById('modify-phone');
    inputArea.style.display = 'none';
    table.style.display = 'none';
    modifyArea.style.display = 'block';
    changeButton.addEventListener('click', saveChanges, {'once':true})
    fetch('#').then( setData(cId) );


    function saveChanges(){
        let newName = modifyName.value;
        let newLastName = modifyLastName.value;
        let newPhone = modifyPhone.value;
        if (!newName && !newLastName && !newPhone){
            fetch('#',{method:"DELETE"}).then(()=> {delete fakeData[cId];
                                                    fillInTable(fakeData)});
        }else{
            let newCandidate = {name:{
                firstname:newName,
                lastname: newLastName,
                phone: newPhone
                }}
            fetch('#', {
                method: 'POST',
                body: newCandidate })
                       .then(()=>{
                           fakeData[cId] = newCandidate;
                           fillInTable(fakeData);
                       })
        }
        inputArea.style.display = 'block';
        table.style.display = 'inline-block';
        modifyArea.style.display = 'none';
    }

    function setData(cId){
        modifyName.value = fakeData[cId].name.firstname;
        modifyLastName.value = fakeData[cId].name.lastname;
        modifyPhone.value = fakeData[cId].name.phone;
    }
}



function addCandidate(){
    let textName = nameCont.value;
    let textLastName = lastNameCont.value;
    let textPhone = phoneCont.value;

    if (textName && textLastName && textPhone){
        let sendData = {name:
                            {
                                firstname:textName,
                                lastname:textLastName,
                                phone:textPhone
                            }
                        };
        fetch('#', {
                method: 'POST',
                body: sendData })
                       .then(response => {  let strIndices = Object.keys(fakeData);
                                            let intIndices = strIndices.map(i=>parseInt(i));
                                            let nextIndex = Math.max(intIndices) +1;
                                            let strNextInd = String(nextIndex);
                                            fakeData[strNextInd] = sendData;
                                            fillInTable(fakeData);
                                            })
    
        nameCont.value = '';
        lastNameCont.value = '';
        phoneCont.value = '';
    }
}


function fillInTable(data){
    table.innerHTML = '';
    let titRaw = document.createElement('tr');
    let titName = document.createElement('th');
    let titLastN = document.createElement('th');
    let titPhone = document.createElement('th');
    let titAdd = document.createElement('th');
    titName.innerHTML = 'Name';
    titLastN.innerHTML = 'Last Name';
    titPhone.innerHTML = 'Phone';
    titAdd.innerHTML = '#Add';
    titRaw.appendChild(titName);
    titRaw.appendChild(titLastN);
    titRaw.appendChild(titPhone);
    titRaw.appendChild(titAdd);
    table.appendChild(titRaw);
    for (let c in data){
        let raw = document.createElement('tr');
        let name = document.createElement('td');
        name.textContent = data[c].name.firstname;
        raw.appendChild(name);
        let lastName = document.createElement('td');
        lastName.textContent = data[c].name.lastname;
        raw.appendChild(lastName);
        let phone = document.createElement('td');
        phone.textContent = data[c].name.phone;
        raw.appendChild(phone);
        let modify = document.createElement('td');
        modify.setAttribute('class','modify-button');
        modify.textContent = '[edit/delete]';
        modify.setAttribute('id',c);
        raw.appendChild(modify);
        raw.setAttribute('class', c);
        table.appendChild(raw);
    }
}

