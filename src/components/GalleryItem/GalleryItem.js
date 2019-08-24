import React, { Component } from 'react';
// import axions from 'axions';

class GalleryItem extends Component {
    state = {
        imageClicked: false,
    }


    revealDescriptionHandler(event) {
        this.setState({
            imageClicked: true
        });
        console.log(this.state.imageClicked); 
    }

  render() {
      let galleryImage = <img src={this.props.itemData.path} alt={this.props.itemData.description}/>
      if (this.state.imageClicked) {
          galleryImage = <div>{this.props.itemData.description}</div>
      }
    return (
        <li>
            <button onClick={(event) => this.revealDescriptionHandler(event)}>
                {/* <img 
                src={this.props.itemData.path} 
                alt={this.props.itemData.description} 
                /> */}
                {galleryImage}
            </button>
        </li> 
    );
  }
}

export default GalleryItem;