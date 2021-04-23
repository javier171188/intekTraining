let e = document.getElementsByClassName('exercise')[0];

let number = '#3020ff';
e.innerHTML += `The hexadecimal number ${number} becomes: `;

function fromHexToRgb(hex){
    let nums = hex.match(/\w{2}/gi);
    let rgb = 'rgb ( ';
    for (num of nums){
        rgb += parseInt(num, 16) +', ';
    }
    rgb = rgb.slice(0, rgb.length-2) +')';
    return rgb;
}

e.innerHTML += `${fromHexToRgb("#3020ff")}, when it is transformed to rgb.`