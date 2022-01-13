import React from 'react';
import IndividualPhoto from './IndividualPhoto';
import LoadingTemplate from './LoadingTemplate';
import Box from '@mui/material/Box';
import { forwardRef } from 'react';


const Photos = forwardRef((props, ref) => {
    let { photos, getPhotos, setNextPhotos, page, galleryID, maxPages, borderColor } = props;

    async function handleReachButton(event) {
        var node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        if (bottom) {
            node.scrollHeight
            if (maxPages > page) {
                let nextData = await getPhotos(galleryID, page + 1);
                setNextPhotos(nextData.images);
            }
        }
    }
    return <Box
        data-testid="photos"
        id='photos'
        component="div"
        onScroll={handleReachButton}
        ref={ref}
        className='grid-wrapper'
    >
        {photos.map((p, i) => <IndividualPhoto src={p.src} key={i} borderColor={borderColor} {...p} />)}
        {photos.length < 1 && <LoadingTemplate />}

    </Box>
}
)
export default Photos;