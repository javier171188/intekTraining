let e = document.getElementsByClassName('exercise')[0];


var bank = [];
function createClient(name, accountNumber,money){
    var client = {'name':name, 'accountNumber':accountNumber}
    function clientProperties(){
        client.showBalance = function(){
                          return money;  
                          }
        client.retrieve = function(quantity){
            if (quantity <0){
                console.log('Only positive numbers are allowed');
            } else if(quantity <= money){
                money -= quantity;
            }else{
                console.log('Not enough money.');
            }
        }
        client.increaseBalance = function(quantity){
            if (quantity<0){
                console.log('Only positive values are allowed;');
            }else{
                money += quantity;
            }
        }
        client.deposit = function(accountNumber, quantity){
            if (quantity< 0){
                console.log('negative numbers are not allowed');
            } else if(quantity >= money){
                console.log('Not enough money');
            }else{
                let receiver  = bank.filter(client => client['accountNumber'] == accountNumber)[0];
                receiver.increaseBalance(quantity);
                money -= quantity;
            }
        }
    bank.push(client);
    return client;
    }
    return clientProperties();
}

let clientA = createClient('David','0',1000)
console.log(clientA.showBalance());
clientA.retrieve(500);
console.log(clientA.showBalance());
clientA.retrieve(800);
clientA.retrieve(500);
console.log(clientA.showBalance());
console.log('New client')
let clientB = createClient('Diana','1',2000);
clientB.retrieve(-800);
console.log(clientB.showBalance());
clientB.retrieve(800);
console.log(clientB.showBalance());
console.log(bank);
console.log('let\'s deposit:');
console.log(`David initial: ${clientA.showBalance()}`);
console.log(`Diana initial: ${clientB.showBalance()}`);
clientB.deposit('0', 500);
console.log(`David final: ${clientA.showBalance()}`);
console.log(`Diana final: ${clientB.showBalance()}`);

e.innerHTML += `Clients:`;
