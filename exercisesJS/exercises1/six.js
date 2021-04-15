let tree = {'A':{'a':{'aa': null},'b':{'ba':null, 'bb':null},'c':{'ca':null, 'cb':{'cab':null}}}};

class branch{

}





let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


ctx.font = "30px Arial";


let branchesObj = {};
let branchesArr = []; 
let sep;
let ypos = 50;
let xpos = 0;
let level = 1;

for (let r in tree){
    console.log(r);
    branchesArr.push(r);
    

}
sep = 1000/(branchesArr.length+1)


for (let r of branchesArr){
    xpos += sep;
    ctx.fillText(r,xpos,ypos);
    
}
ypos += 100;
branchesArr = [];

for (let r in tree){
    console.log(r);
    branchesArr.push(r);
}


