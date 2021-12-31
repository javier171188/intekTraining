import React from 'react';
import { useEffect, useRef, useState } from 'react';
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
    const [nextPhotos, setNextPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [galleryID, setGalleryID] = useState(1);
    const [maxPages, setMaxPages] = useState(10);

    const photosRef = useRef()

    useEffect(async () => {
        let response = await getPhotos(1, 1);
        setPhotos(response.images);
    }, [])


    async function handlePrevious() {
        setPage(page - 1);
        setPhotos([]);
        let response = await getPhotos(galleryID, page);
        setPhotos(response.images);
        setNextPhotos([]);
    }
    async function handleNext() {
        setPage(page + 1);
        if (nextPhotos.length > 0) {
            setPhotos(nextPhotos);
            photosRef.current.scrollTo(0, 0);

        } else {
            setPhotos([]);
            let response = await getPhotos(galleryID, page);
            setPhotos(response.images);
        }
        setNextPhotos([]);
    }


    return <>
        <Photos photos={photos}
            getPhotos={getPhotos}
            setNextPhotos={setNextPhotos}
            page={page}
            galleryID={galleryID}
            maxPages={maxPages}
            ref={photosRef} />
        <Buttons
            page={page}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            maxPages={maxPages} />
    </>
}

export default Gallery;