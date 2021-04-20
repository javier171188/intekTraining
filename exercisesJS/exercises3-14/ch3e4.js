let e = document.getElementsByClassName('exercise')[0];

e.innerHTML ="The image has the properties (data,40,40,'myImage'), then <br/>"


class Image{
    constructor(data, width, height, name){
        this.width = width;
        this.height = height;
        this.name = name;
        if (width*height == data.length){
            this.data = data;
        }
        else{ 
            throw new Error("The width and height do not match the array");
        }
    }

    pixelData(x,y){
        let position = this.width*y + x;
        return this.data[position];
    }

    
}

let data = new Array(1600);
for (let i=0; i<data.length; i++){
    data[i] = Math.random()
}

let img = new Image(data,40,40,'myImage');
e.innerHTML += "img.width: " + String(img.width) +'<br/>';
e.innerHTML += "img.heigth: " + String(img.height)+'<br/>';
e.innerHTML += "img.name: " + img.name + '<br/>';
e.innerHTML += "img.pixelData (20, 4): " + img.pixelData (20, 4) + '<br/>';