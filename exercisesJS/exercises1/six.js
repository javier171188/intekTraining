let tree = {'A':{'a':{'aa': {}},'b':{'ba':{}, 'bb':{}},'c':{'ca':{}, 'cb':{'cab':{}}}}};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

let level = 0;
let numNodes = Object.keys(tree).length;
let sep = 1000/(numNodes+1);
let ypos = 50;
let yspace = 110;
let xpos = 0;
let branchesObj = {0:{}};
let positions = {};
let subSep = 1/(numNodes+1);

//Place the roots.
for (let r in tree){
    xpos += sep;
    ctx.fillText(r, xpos, ypos);
    positions[r] = {'x': xpos, 'y':ypos};
    let c = 0;
    for (let node in tree[r]){
        branchesObj[level][node] = tree[r][node];
        positions[node] = {'x_parent':xpos, 'y_parent':ypos, 'x': xpos - 0.5*sep + subSep*sep*c, 'y': ypos+yspace};
        positions[node]['space'] = sep;
        c++;
    }
}
ypos+=yspace;
//Create the tree
while(level < 5){ //  <-----remember to change
    level++;
    ypos+=yspace;
    numNodes = Object.keys(branchesObj[level-1]).length;
    let c=0;
    branchesObj[level] = {};
    for (let node in branchesObj[level-1]){
        sep = positions[node]['space']/numNodes;
        ctx.fillText(level, positions[node]['x'], positions[node]['y']);
        for (let subNode in branchesObj[level-1][node]){
            console.log(node, subNode);
            branchesObj[level][subNode] = branchesObj[level-1][node][subNode];
            positions[subNode] = {'x_parent':positions[node]['x']};
            positions[subNode]['y_parent'] = positions[node]['y'];
            positions[subNode]['y'] = ypos;
            positions[subNode]['space'] = sep;
            xpos = positions[subNode]['x_parent'] + positions[node]['space']*(c/(1+numNodes)-0.5);
            positions[subNode]['x'] = xpos;
            c++;
        }
        
    }


    
    
    console.log(level);
}

console.log(branchesObj);
console.log(positions);