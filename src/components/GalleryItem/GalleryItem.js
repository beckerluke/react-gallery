import React, { Component } from 'react';
import axios from 'axios';
// import axios from 'axios';

class GalleryItem extends Component {
    state = {
        imageClicked: false,
    }

    updateLikes(galleryId) {
        axios({
            method: 'PUT',
            url: `/gallery/like/${galleryId}`,
            data: galleryId
        })
        .then((serverResponse) => {
            console.log('GET error: ', serverResponse);
            
            this.props.getGalleryListCallback();
        })
        .catch((err) => {
            console.log('Error updating likes: ', err);
            alert('There was an error updating likes.');
        })
        
    }

    clickLikeHandler = (event, likes) => {
        this.updateLikes(this.props.itemData.id);
    }

    revealDescriptionHandler(event) {
        this.setState({
            imageClicked: !this.state.imageClicked
        });
        console.log(this.state.imageClicked); 
    }

  render() {
      let galleryImage = 
        <img 
            src={this.props.itemData.path} 
            alt={this.props.itemData.description}
        />
      if (this.state.imageClicked) {
          galleryImage = <div className="photo-description">{this.props.itemData.description}</div>
      }
    return (
        <li>
            <button onClick={(event) => this.revealDescriptionHandler(event)}>
                {galleryImage}
            </button>
            <button onClick={this.clickLikeHandler}>Like</button>
            <p>{this.props.itemData.likes} people liked this!</p>
        </li> 
    );
  }
}

export default GalleryItem;