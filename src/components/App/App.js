import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  
  // state to hold up-to-date galleryList data from server
  state = {
    galleryList: [],
  }

  componentDidMount() {
    // getGalleryList data from server upon page load
    this.getGalleryList();
  }

  getGalleryList = () => {
    // GET request to server for updated data
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then((response) => {
        console.log('GET galleryList: ', response.data);
        
        // update state with data from server
        this.setState({
          galleryList: [
            ...response.data,
          ]
        });
      })
      .catch((error) => {
          console.log('Error in GET', error);
          alert('FAILED');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList 
            getGalleryListCallback={this.getGalleryList} 
            galleryList={this.state.galleryList}
        />
      </div>
    );
  }
}

export default App;
