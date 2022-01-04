'use strict';

function shuffle(array) {
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return [...array];
}

class makeRequest {
    constructor() {
        this.mockPhotos = [{
            src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
            width: 681, height: 454
        },
        {
            src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
            width: 477, height: 636
        },
        {
            src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
            width: 681, height: 454
        },
        {
            src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
            width: 477, height: 636
        },
        {
            src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
            width: 681, height: 454
        },
        {
            src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
            width: 477, height: 636
        },
        {
            src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
            width: 681, height: 454
        },
        {
            src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
            width: 477, height: 636
        },
        {
            src: "https://images.pexels.com/photos/2556000/pexels-photo-2556000.jpeg",
            width: 400, height: 800
        },
        {
            src: "https://images.pexels.com/photos/7492227/pexels-photo-7492227.jpeg",
            width: 800, height: 400
        }
        ];

    }

    get(url) {
        '/gallery/:galleryID/?count=10&page=1'
        let galleryID = url.split('/')[2];
        let page = url.match(/page=\d*/);

        let images = shuffle(this.mockPhotos);

        let returnObj = {
            id: galleryID,
            images,
            page,
            total: images.length
        }
        let returnJSON = JSON.stringify(returnObj);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(returnJSON);
            }, 0);
        })
    }
}

let axios = new makeRequest();

export default axios;