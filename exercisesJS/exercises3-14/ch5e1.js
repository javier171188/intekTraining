let e = document.getElementsByClassName('exercise')[0];


class Bank{
    constructor(name, accounts){
        this.name = name;
        this.accounts = accounts;
    }
    addClient(client){
        this.accounts.push(client);
    }
    _getClient(accountNumber){
        let askClient = this.accounts.filter(client => client['accountNumber'] === accountNumber)[0];
        return askClient;
    }
    showBalance(accountNumber){
        let balanceClient = this._getClient(accountNumber)
        return balanceClient['storedMoney'];
    }
    retrieve(quantity, accountNumber){
        let retrieveClient = this._getClient(accountNumber);
        if (quantity < 0){
            console.log('only positive numbers are allowed');
            return 0
        }
        if (retrieveClient['storedMoney'] >= quantity){
            retrieveClient['storedMoney'] -= quantity;
            return quantity;
        }
        console.log('Not enough money.');
        return 0;
    }
    deposit(quantity, destinyAccount){
        let destinyUser = this._getClient(destinyAccount);
        destinyUser['storedMoney'] += quantity;
    }
}

class Client{
    constructor(name, pocketMoney, account){
        this.name = name;
        this.pocketMoney = pocketMoney;
        this.account = account;
    }
    deposit(quantity, receiver){
        if (quantity<0){
            console.log('Only positive quantities are allowed');
        }else if(this.pocketMoney<quantity){
            console.log('You do not have enough money');
        } else{
            bank.deposit(quantity, receiver);
            this.pocketMoney -= quantity;
        }
    }
    retrieve(quantity){
        this.pocketMoney += bank.retrieve(quantity, this.account)
    }
    showBalance(){
        return bank.showBalance(this.account);
    }
}

function createClient(name, accountNumber, bankMoney, pocketMoney){
    let newClient = new Client(name, pocketMoney, accountNumber);
    bank.addClient({'accountNumber':accountNumber, 'owner':name, 'storedMoney':bankMoney});
    return newClient;
}

let bank = new Bank('bank', [{'accountNumber':0, 'owner':'David', 'storedMoney': 1000}]);
let clientA = new Client('David', 500, 0);
console.log(clientA.showBalance());
clientA.retrieve(500);
console.log('clientA retrieves 500');
console.log('clientA balance:', clientA.showBalance());
console.log('clientA money in pocket', clientA.pocketMoney);
console.log('clientA tries to retrieve 800');
clientA.retrieve(800);
console.log('clientA balance:', clientA.showBalance());
console.log('clientA money in pocket', clientA.pocketMoney);
console.log('Creating clientB')
let clientB = createClient('Diana', 1, 2000, 300);
console.log('clientB balance:', clientB.showBalance());
console.log('clientB money in pocket', clientB.pocketMoney);
console.log('clientB tries to retrieve a negative quantity');
clientB.retrieve(-800);
console.log('clientB balance:', clientB.showBalance());
console.log('clientB money in pocket', clientB.pocketMoney);
console.log('clientB retrieves 800');
clientB.retrieve(800);
console.log('clientB balance:', clientB.showBalance());
console.log('clientB money in pocket', clientB.pocketMoney);
console.log('clientB tries to deposit a negative quantity');
clientB.deposit(-5, 0);
console.log('clientB balance:', clientB.showBalance());
console.log('clientB money in pocket', clientB.pocketMoney);
console.log('clientB tries to deposit more money that she has')
clientB.deposit(1101, 1);
console.log('clientB retrieves 300 to clientA');
clientB.deposit(300, 0);
console.log('clientA balance:', clientA.showBalance());
console.log('clientA money in pocket', clientA.pocketMoney);
console.log('clientB balance:', clientB.showBalance());
console.log('clientB money in pocket', clientB.pocketMoney);
console.log('clientB deposits 300 to her account');
clientB.deposit(300, 1);
console.log('clientB balance:', clientB.showBalance());
console.log('clientB money in pocket', clientB.pocketMoney);






e.innerHTML += `Clients: ${clientA['name']}, ${clientB['name']} <br/><br/>`;
e.innerHTML += 'Initial state: <br/>';
e.innerHTML += `${clientA['name']}: in pocket ${clientA.pocketMoney}, in bank ${clientA.showBalance()} <br/>`;
e.innerHTML += `${clientB['name']}: in pocket ${clientB.pocketMoney}, in bank ${clientB.showBalance()} <br/>`;

clientA.deposit(100, 1);
e.innerHTML += `<br/> now ${clientA['name']} deposits 100 to ${clientB['name']}, and the result is <br/>`;
e.innerHTML += `${clientA['name']}: in pocket ${clientA.pocketMoney}, in bank ${clientA.showBalance()} <br/>`;
e.innerHTML += `${clientB['name']}: in pocket ${clientB.pocketMoney}, in bank ${clientB.showBalance()} <br/>`;