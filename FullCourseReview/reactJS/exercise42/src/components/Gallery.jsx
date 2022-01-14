import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Photos from './Photos';
import Buttons from './Buttons';

let tempPhotos = [
    {
        src: "https://images.pexels.com/photos/2556000/pexels-photo-2556000.jpeg",
        width: 400, height: 800
    },
    {
        src: "https://neiloseman.com/wp-content/uploads/2017/06/jurassic-world-trailer-jurassic-park-4-jurassic.jpg",
        width: 800, height: 400
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
        src: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg",
        width: 681, height: 454
    },
    {
        src: "https://images.pexels.com/photos/9554219/pexels-photo-9554219.jpeg",
        width: 477, height: 636
    }
];


const Gallery = ({ getPhotos }) => {
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

    useEffect(() => { }, [photos])

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
            setPhotos([]);
            setPhotos(nextPhotos);
            photosRef.current.scrollTo(0, 0);

        } else {
            setPhotos([]);
            let response = await getPhotos(galleryID, page);
            setPhotos(response.images);
        }
        setNextPhotos([]);
    }
    console.log(nextPhotos);
    return <>
        <Photos photos={photos}
            getPhotos={getPhotos}
            setNextPhotos={setNextPhotos}
            page={page}
            galleryID={galleryID}
            maxPages={maxPages}
            ref={photosRef}
            nextPhotos={nextPhotos} />
        <Buttons
            page={page}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            maxPages={maxPages} />

    </>
}

export default Gallery;