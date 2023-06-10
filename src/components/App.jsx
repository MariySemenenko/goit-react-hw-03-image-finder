import { getImages } from '../pixabay/pixabay';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    error: null,
    total: 0,
    showModal: false,
    largeImg: '',
    tags: '',
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await getImages(query, page);

      if (hits.length === 0) {
        return alert('за вашим запитом нічого не знайдено');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onHandleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  //показати модалку
  openModal = (largeImage, tags) => {
    this.setState({
      showModal: true,
      largeImage,
      tags,
    });
  };

  //закрити модалку
  closeModal = () => {
    this.setState({
      showModal: false,
      largeImage: '',
      tags: '',
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showModal, isLoading, total, error, tags, largeImage } =
      this.state;

    const AllPage = total / images.length;
    return (
      <>
        <Searchbar onHandleSubmit={this.onHandleSubmit} />
        {error && <p>Щось пішло не так</p>}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {showModal && (
          <Modal
            onClouse={this.closeModal}
            tags={tags}
            largeImage={largeImage}
          />
        )}

        {isLoading && <Loader />}
        {AllPage > 1 && !isLoading && images.length > 0 && (
          <Button onClick={this.onLoadMore} />
        )}
      </>
    );
  }
}
