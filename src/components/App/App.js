import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList: [],
  }

  componentDidMount() {
    console.log('COMPONENT MOUNTED');
    
    this.getGalleryList();
  }

  getGalleryList = () => {
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then((response) => {
        console.log('GET galleryList: ', response.data);
        
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
        <GalleryList />
      </div>
    );
  }
}

export default App;
