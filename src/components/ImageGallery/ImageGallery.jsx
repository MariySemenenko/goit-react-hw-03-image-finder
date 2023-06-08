import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';



//тут рендериться список зображень масиву
//webformatURL, tags, largeImageURL і toggleModal це властивості img
export const ImageGallery = ({ images, openModal }) => {

    return (
        <ul>
             {images.map(({id, webformatURL, tags, largeImageURL }) => (
                
             <ImageGalleryItem
             key={id} 
             webformatURL={webformatURL} 
             tags={tags}
             largeImageURL={largeImageURL}
             toggleModal={openModal}
             
             />
             ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    openModal: PropTypes.func.isRequired,
}












// ImageGallery.propTypes = {
//     :PropTypes.
// }
    
