import PropTypes from 'prop-types';


//ImageGallery відображення списку зображень images
//ImageGalleryItem це кожне зобрання дочірнє

export const ImageGallery = ({ images, toggleModal }) => {

    return (
        <ul>
             {images.map(({id, webformatURL, tags, largeImageURL }) => (
             <ImageGalleryItem 
             key={id} 
             webformatURL={webformatURL} 
             tags={tags}
             largeImageURL={largeImageURL}
             toggleModal={toggleModal}
             />
             ))}
        </ul>
    )
}














// ImageGallery.propTypes = {
//     :PropTypes.
// }
    
