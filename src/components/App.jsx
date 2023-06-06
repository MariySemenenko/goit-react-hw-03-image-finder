import { getImages } from 'pixabay/pixabay';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';


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
  this.getPhotos(query, page)
}
}
// componentDidMount() {
//   this.getPhotos('cat', 1)  
// }


getPhotos = async (query, page) => {

if (!query) {
  return
}
try {
  
this.setState(
 {isLoading: true} 
)
const {hits, totalHits} = await getImages(query, page)

if (hits.length === 0) {
return alert('за вашим запитом нічого не знайдено')
}
this.setState(
  prevState => ({images: [...prevState.images, ...hits ], total: totalHits })
)
} catch (error) {
  this.setState({error: error.message})
} finally {
this.setState({isLoading: false})
}
}

onHandleSubmit = (query) => {
  this.setState({query, page: 1, images: []})
}

  render() {
console.log(this.state)
return (

<>
<Searchbar onHandleSubmit={this.onHandleSubmit}/>
</>

)

  }
}



//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
//user_id:35692363 