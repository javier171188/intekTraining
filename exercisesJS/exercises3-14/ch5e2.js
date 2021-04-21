let e = document.getElementsByClassName('exercise')[0];


let building = {'floors':[{'floor': 'Ll', 'rooms':[{'A':{'workers':[], 'equipment':[]}}]}], 
            'workers':[{'name':'','ubication':'', 'equipment':[]}],
            'equipment':[{'description':'', 'ubication':'', 'worker':''}]};

building = {'floors':[{'floor': 'Ll', 'rooms':[{'A':{'workers':['001'], 'equipment':['computerA', 'printerA']}}]}], 
            'workers':[{'name':'001','ubication':{'floor':'Ll', 'room':'A'}, 'equipment':['computerA']}],
            'equipment':[{'description':'computerA', 'ubication':{'floor':'Ll', 'room':'A'}, 'worker':'001'},
                          {'description':'printerA', 'ubication':{'floor':'Ll', 'room':'A'}, 'worker':''}  ],
            findWorkerByName: function(name){
                let searched = this['workers'].filter(worker => worker.name === name)
                if (searched.length >0 ){
                    return searched[0];
                }
                return {};
            },
            findWorkersByUbication: function(floor, room){
                let searched = this['workers'].filter(worker => (worker.ubication.floor === floor && worker.ubication.room === room));
                return searched;
            },
            findWorkersByEquipment: function(equipment){
                let searched = this['workers'].filter(worker => (worker.equipment.includes(equipment)));
                return searched;
            },
            findEquipmentByName:function(name){
                let searched = this['equipment'].filter(equipment => (equipment.description === name));
                return searched;
            },
            findEquipmentByUbication: function(floor,room){
                let searched = this['equipment'].filter(equipment => (equipment.ubication.floor === floor && equipment.ubication.room === room));
                return searched;
            },
            findEquipmentByWorker:function(worker){
                let searched = this['equipment'].filter(equipment => (equipment.worker === worker));
                return searched;
            }
        };
console.log('a')
console.log(building.findWorkerByName('001'));
console.log(building.findWorkerByName('002'));
console.log(building.findWorkersByUbication('Ll', 'A'));
console.log(building.findWorkersByUbication('Ll', 'B'));
console.log(building.findWorkersByEquipment('computerA'));
console.log(building.findWorkersByEquipment('computerB'));
console.log(building.findEquipmentByName('computerA'));
console.log(building.findEquipmentByName('computerB'));
console.log(building.findEquipmentByUbication('Ll', 'B'));
console.log(building.findEquipmentByUbication('Ll', 'A'));
console.log(building.findEquipmentByWorker('001'));
console.log(building.findEquipmentByWorker('002'));

e.innerHTML += 'The structure of the building is as follows: <br/>';
e.innerHTML += "building = {'floors':[{'floor': 'Ll', 'rooms':[{'A':{'workers':['001'], 'equipment':['computerA', 'printerA']}}]}], <br/>";
e.innerHTML += "'workers':[{'name':'001','ubication':{'floor':'Ll', 'room':'A'}, 'equipment':['computerA']}], <br/>";
e.innerHTML += "'equipment':[{'description':'computerA', 'ubication':{'floor':'Ll', 'room':'A'}, 'worker':'001'}, <br/>";
e.innerHTML += "{'description':'printerA', 'ubication':{'floor':'Ll', 'room':'A'}, 'worker':''}  ]} <br/>";
e.innerHTML += "<br/> The building has the methods: findWorkerByName, findWorkersByUbication, findWorkersByEquipment, <br/>";
e.innerHTML += " findEquipmentByName,  findEquipmentByUbication and findEquipmentByWorker <br/>";
e.innerHTML += "<br/> For example, you the method building.findEquipmentByUbication('Ll', 'A') returns: "
for (let eq of building.findEquipmentByUbication('Ll', 'A')){
    e.innerHTML += eq.description +', '
}
e.innerHTML = e.innerHTML.slice(0, e.innerHTML.length-2);