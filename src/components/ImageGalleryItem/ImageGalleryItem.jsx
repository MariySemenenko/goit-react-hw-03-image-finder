// import PropTypes from 'prop-types';


export const ImageGalleryItem = ({
  webformatURL,
  tags,
  toggleModal,
  largeImageURL,
}) => {
  return (
    <>
      <li onClick={() => toggleModal(largeImageURL, tags)}>
        <img src={webformatURL} alt={tags} />
      </li>
    </>
  );
};

// ImageGalleryItem.propTypes = {

// }
