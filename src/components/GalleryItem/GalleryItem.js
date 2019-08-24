import React, { Component } from 'react';
// import axions from 'axions';

class GalleryItem extends Component {
    // revealDescriptionHandler = (event) => {
        
    // }

  render() {
    return (

        <li>
            <img 
            src={this.props.itemData.path} 
            alt={this.props.itemData.description} 
            onClick={this.revealDescriptionHandler}    
            />
            {/* <button
                    
            >
                Delete
            </button> */}
        </li> 
    );
  }
}

export default GalleryItem;