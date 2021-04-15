let tree = {'A':{'a':{'aa': null},'b':{'ba':null, 'bb':null},'c':{'ca':null, 'cb':{'cab':null}}}};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

let branchesObj = {0:tree};
let sep;
let ypos = 50;
let xpos = 0;
let level = 0;

while (level  <5 ){
    sep = 1000/(Object.keys(branchesObj[level]).length+1)
    branchesObj[level+1] = {};
    for (let node in branchesObj[level]){
        console.log(node);
        xpos += sep;
        ctx.fillText(node, xpos, ypos);
        for (let subnode in branchesObj[level][node]){
            branchesObj[level+1][subnode] = branchesObj[level][node][subnode];
        }
    }
level++;
ypos+=100;
xpos=0;

}




