let e = document.getElementsByClassName('exercise')[0];



let building = {'floors':{'ll':{'workers':['1','2','3'], 'equipment':['camera1','camera2','pc1'], 'rooms':['D','A']},
                          'ff':{'workers':['4','5','6','7','8'], 'equipment':['pc2','pc3','pc4','pc5','printer'], 'rooms':['1A','1B','1C','1D']},
                          'sf':{'workers':['9','10'], 'equipment':['camera3','camera4', 'pc5','pc7'], 'rooms':['2A','2B']}
                        }, 
                'workers':{'1':{'floor':'ll','room':'D', 'equipment':'pc1'},
                           '2':{'floor':'ll','room':'D', 'equipment':''},
                           '3':{'floor':'ll','room':'A', 'equipment':''},
                           '4':{'floor':'ff','room':'1A', 'equipment':'pc2'},
                           '5':{'floor':'ff','room':'1B', 'equipment':'pc3'},
                           '6':{'floor':'ff','room':'1C', 'equipment':'pc4'},
                           '7':{'floor':'ff','room':'1D', 'equipment':'pc5'},
                           '8':{'floor':'ff','room':'1D', 'equipment':'pc6'},
                           '9':{'floor':'sf','room':'2A', 'equipment':'pc7'},
                           '10':{'floor':'sf','room':'2B', 'equipment':'pc8'}
                            },
                'equipment':{'camera1':{'floor':'ll','room':'D','worker':''},
                             'camera1':{'floor':'ll','room':'D','worker':''},
                             'camera2':{'floor':'ll','room':'A','worker':''},
                             'camera3':{'floor':'sf','room':'2A','worker':''},
                             'camera4':{'floor':'sf','room':'2B','worker':''},
                             'pc1':{'floor':'ll','room':'D','worker':'1'},
                             'pc2':{'floor':'ff','room':'1A','worker':'4'},
                             'pc3':{'floor':'ff','room':'1B','worker':'5'},
                             'pc4':{'floor':'ff','room':'1C','worker':'6'},
                             'pc5':{'floor':'ff','room':'1D','worker':'7'},
                             'pc6':{'floor':'ff','room':'1D','worker':'8'},
                             'pc7':{'floor':'sf','room':'2A','worker':'9'},
                             'pc8':{'floor':'sf','room':'2B','worker':'10'},
                             'printer':{'floor':'ff','room':'1D','worker':''},
                            }
                };

function findInTheBuilding(){
    let cache = {};
    function innerFunction(lookedKey){
        if (Object.keys(cache).indexOf(lookedKey)>=0){
            return cache[lookedKey]
        }
        let item = {};
        if (Object.keys(building['workers']).indexOf(lookedKey)>=0){
            item = building['workers'][lookedKey];
        } else if (Object.keys(building['equipment']).indexOf(lookedKey)>=0){
            item = building['equipment'][lookedKey];
        }
        if (Object.keys(item).length>0){
            cache[lookedKey] = item;
        }
        return item;
    }
    return innerFunction;
}

let searchInBuilding = findInTheBuilding();
console.log(searchInBuilding('3'));
console.log(searchInBuilding('9'));
console.log(searchInBuilding('printer'));
console.log(searchInBuilding('camera1'));
console.log(searchInBuilding('car'));

e.innerHTML += `We first look for the worker 3: `;
e.innerHTML += `floor: ${searchInBuilding('3')['floor']},  `;
e.innerHTML += `room: ${searchInBuilding('3')['room']}.`;

e.innerHTML += '<br/>';
e.innerHTML += 'Now we look for the printer: ';
e.innerHTML += `floor: ${searchInBuilding('printer')['floor']}, `;
e.innerHTML += `room: ${searchInBuilding('printer')['room']}.`;  
e.innerHTML += '<br/>';