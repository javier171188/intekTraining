let tree = {'A':{'a':{'aa': null},'b':{'ba':null, 'bb':null},'c':{'ca':null, 'cb':{'cab':null}}}};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

let branchesObj = {0:tree};
let positions = {};
let sep;
let ypos = 50;
let xpos = 0;
let level = 0;
let checker = true;

while (checker){
    sep = 1000/(Object.keys(branchesObj[level]).length+1)
    branchesObj[level+1] = {};
    for (let node in branchesObj[level]){
        xpos += sep;
        ctx.fillText(node, xpos, ypos);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(1000, 1000);
        ctx.closePath();
        
        if(!branchesObj[level][node]) branchesObj[level][node] = {};
        if (!positions[node]) positions[node] = {};
        positions[node]['x'] = xpos;
        positions[node]['y'] = ypos;
        if (positions[node]['y_parent']){
            ctx.beginPath();
            ctx.moveTo(positions[node]['x_parent']+10, positions[node]['y_parent']);
            ctx.lineTo(xpos+10, ypos-20);
            ctx.closePath();
            ctx.stroke();
        }
        for (let subnode in branchesObj[level][node]){
            branchesObj[level+1][subnode] = branchesObj[level][node][subnode];
            positions[subnode] = {'x_parent':xpos, 'y_parent': ypos};
            
        }
    }
if (Object.keys(branchesObj[level+1]).length == 0) checker = false;
level++;
ypos+=110;
xpos=0;
}
console.log(positions);





