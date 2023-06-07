import PropTypes from 'prop-types';



//тут рендериться список зображень масиву
//webformatURL, tags, largeImageURL і toggleModal це властивості img
export const ImageGallery = ({ images, toggleModal }) => {

    return (
        <ul>
             {images.map(({id, webformatURL, tags, largeImageURL }) => (
             <img 
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
    
