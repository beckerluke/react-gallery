import React, { Component } from 'react';
import axios from 'axios';
// import axios from 'axios';

class GalleryItem extends Component {
    state = {
        imageClicked: false,
    }

    // PUT request to send id to server to update number of likes
    updateLikes(galleryId) {
        axios({
            method: 'PUT',
            url: `/gallery/like/${galleryId}`
        })
        .then((serverResponse) => {
            console.log('GET error: ', serverResponse);
            // Calling get function to GET retrieve newest data
            this.props.getGalleryListCallback();
        })
        .catch((err) => {
            console.log('Error updating likes: ', err);
            alert('There was an error updating likes.');
        })
        
    }

    clickLikeHandler = (event, likes) => {
        // taking update likes by the id of corresponding button clicked
        this.updateLikes(this.props.itemData.id);
    }

    revealDescriptionHandler(event) {
        // set state to toggle back and forth from image to description
        this.setState({
            imageClicked: !this.state.imageClicked
        });
    }

  render() {
    let galleryImage = 
        <img 
            src={this.props.itemData.path} 
            alt={this.props.itemData.description}
        />
    // conditional rendering to toggle back and forth from image to description  
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