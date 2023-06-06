import { Component } from 'react';

export class Searchbar extends Component {

    state = {
        query: '',
        
    };
  
    handleChange = (e) => {
      this.setState({query: e.currentTarget.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      if (this.state.query.trim() === '') {
        return alert('не можна зробити запит')
      }
      this.props.onHandleSubmit(this.state.query)
      this.setState({query: ''})
    }
    render() {
  
  return (
  
  <>
  <form onSubmit={this.handleSubmit}>
<button></button>
<input value={this.state.query} onChange={this.handleChange}/>


  </form>


  </>
  
  )
  
    }
  }
  