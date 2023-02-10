import { LazyLoadImage } from "react-lazy-load-image-component";
import './Images.scss';

function Images({ pathImage, width, titleAlt }) {

    const customLinkImages = (pathImage) => {
        return `https://image.tmdb.org/t/p/${width}${pathImage}`
    }

    return (
        <>
            {
                pathImage === null 
                ? '' 
                : 
                <LazyLoadImage
                    loading="lazy"
                    className="images"
                    src={customLinkImages(pathImage)}
                    alt={titleAlt}
                />
            }

        </>
    );
}

export default Images;