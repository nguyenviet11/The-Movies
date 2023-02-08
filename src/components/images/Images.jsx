import { LazyLoadImage } from "react-lazy-load-image-component";

function Images({ pathImage, width, titleAlt, stylesImage }) {

    const customLinkImages = (pathImage) => {
        return `https://image.tmdb.org/t/p/${width}/${pathImage}`
    }

    const handleStyleImages = (stylesImage) => {
        let classes;
        if (stylesImage === 'poster') classes = "card-style1__poster"
        return classes;
    }

    return ( 
        <LazyLoadImage
            loading="lazy"
            className={handleStyleImages(stylesImage)}
            src={customLinkImages(pathImage)}
            alt={titleAlt}
        />
     );
}

export default Images;