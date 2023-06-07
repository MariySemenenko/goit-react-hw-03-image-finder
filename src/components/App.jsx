import { getImages } from 'pixabay/pixabay';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader'

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
  // componentDidMount() {
  //   this.getPhotos('cat', 1)
  // }

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
  toggleModal = (largeImage, tags) => {
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

  render() {
    const { images, showModal } = this.state;
    console.log(this.state);

    return (
      <>
        <Searchbar onHandleSubmit={this.onHandleSubmit} />
        {images.length > 0 && <ImageGallery images={images} toggleModal={this.toggleModal}/>}

        <ImageGalleryItem/>

        
          
        {/* {isLoading ? <Loader /> : <p>Завантаження завершено</p> } */}
      </>
    );
  }
}


