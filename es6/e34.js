'use strict';
let g = -0.00259,
    v0 = 0,
    s0 = 9,
    t = 0,
    final = 8,
    y;


for (let i =0; i< 1000; i++){
    t++;
    y = position(t,v0,s0);
    console.log(y);
    if (y<=0){
        t = 0;
        v0 =  Math.sqrt(- 2*final*g);
        s0 = 0;
        final--
    }
}



function position(t,v0,s0){
    return g*t*t/2 + v0*t + s0;
}
