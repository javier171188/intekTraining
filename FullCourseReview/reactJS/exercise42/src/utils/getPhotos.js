import axios from '../mockCall';

async function getPhotos(galleryID, page) {
    let responseJSON = await axios.get(`/gallery/${galleryID}/?count=10&page=${page}`)
    let responseObj = JSON.parse(responseJSON);
    return responseObj;
}

export default getPhotos;