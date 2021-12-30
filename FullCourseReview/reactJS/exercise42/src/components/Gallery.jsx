import { useEffect, useState } from 'react';
import axios from '../mockCall';
import Photos from './Photos';
import Buttons from './Buttons';

const Gallery = () => {
    async function getPhotos(galleryID, page) {
        let responseJSON = await axios.get(`/gallery/${galleryID}/?count=10&page=${page}`)
        let responseObj = JSON.parse(responseJSON);
        return responseObj;
    }

    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [galleryID, setGalleryID] = useState(1);

    useEffect(async () => {
        let response = await getPhotos(1, 1);
        setPhotos(response.images);
    }, [])


    async function handlePrevious() {
        setPage(page - 1);
        setPhotos([]);
        let response = await getPhotos(galleryID, page);
        setPhotos(response.images);
    }
    async function handleNext() {
        setPage(page + 1);
        setPhotos([]);
        let response = await getPhotos(galleryID, page);
        setPhotos(response.images);
    }
    function handleReachButton() {

    }

    return <>
        <Photos photos={photos} />
        <Buttons
            page={page}
            handlePrevious={handlePrevious}
            handleNext={handleNext} />
    </>
}

export default Gallery;