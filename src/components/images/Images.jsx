function Images({pathImage, titleAlt}) {
    const customLinkImages = (pathImage) => {
        return `https://image.tmdb.org/t/p/w500/${pathImage}`
    }
    return ( 
        <img
            loading="lazy"
            className="card-style1__poster"
            src={customLinkImages(pathImage)}
            alt={titleAlt}
        />
     );
}

export default Images;