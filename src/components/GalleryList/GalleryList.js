import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        // passing getGalleryListCallback function and individual object in mapped array to GalleryItem component    
        const galleryElements = this.props.galleryList.map((photo, index) => {
            return  <GalleryItem
                        key={index}
                        getGalleryListCallback={this.props.getGalleryListCallback}
                        itemData={photo}
                    />;
        });
  
        return (
            <ul>
                {galleryElements}
            </ul>
        );
    }
}

export default GalleryList;