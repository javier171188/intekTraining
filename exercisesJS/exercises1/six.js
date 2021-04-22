let tree = {'A':{'a':{'aa': {}},'b':{'ba':{}, 'bb':{}},'c':{'ca':{}, 'cb':{'cab':{}}}}};
let e = document.getElementsByClassName('exercise')[0];
let branches = [tree];
let nextBranches = [];
e.innerHTML += 'The values are: <br/>';

while (branches.length !== 0){
    for (b of branches){
        for (nb in b){
            console.log(nb);
            e.innerHTML += nb + '<br/>';
            if (Boolean(b[nb])){
                nextBranches.push(b[nb]);
            }
        }
    }
    branches = nextBranches.slice();
    nextBranches =[];   
}