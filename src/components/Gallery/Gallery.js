import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Gallery.css';

const Photo = ({ img, alt }) => {
  return(
    <div className="col s12 m3 marg">
      <img className="materialboxed responsive-img" src={img} alt={alt} />
    </div>
  );
}

class PhotoGallery extends Component {

  state = {
    photo: [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1591369839359-e1e548de744e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJ1Y2t8fHx8fHwxNjM3ODI5MDA3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
        alt: "hotel"
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1584527810790-01a904be796b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJ1Y2tzfHx8fHx8MTYzNzgyOTE1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
        alt: "restaurant"
      },
      {
        id: 3,
        img: "https://source.unsplash.com/1600x900/?nature",
        alt: "nature"
      },
      {
        id: 4,
        img: "https://source.unsplash.com/1600x900/?beach",
        alt: "beach"
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1584527810790-01a904be796b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dHJ1Y2tzfHx8fHx8MTYzNzgyOTE1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
        alt: "travel"
      },
      {
        id: 6,
        img: "https://source.unsplash.com/1600x900/?city",
        alt: "city"
      },
      {
        id: 7,
        img: "https://source.unsplash.com/1600x900/?adventure",
        alt: "adventure"
      },
      {
        id: 8,
        img: "https://source.unsplash.com/1600x900/?sea",
        alt: "sea"
      },
      {
        id: 9,
        img: "https://source.unsplash.com/1600x900/?building",
        alt: "building"
      },
      {
        id: 10,
        img: "https://source.unsplash.com/1600x900/?climbing",
        alt: "climbing"
      },
      {
        id: 11,
        img: "https://source.unsplash.com/1600x900/?forest",
        alt: "forest"
      },
      {
        id: 12,
        img: "https://source.unsplash.com/1600x900/?resort",
        alt: "resort"
      }
    ]
  }

  render() {
    return (
      <div className="row">
        {this.state.photo.map(gal => (
        <Photo 
        key={gal.id} 
        img={gal.img} 
        alt={gal.alt}
        />
        ))}
      </div>
    );
  }
}





class Gallery extends Component {
  render() {
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="black-text darken-1">Photo </span> Gallery
          </h4>
          <PhotoGallery />
          {/* <div className="row">
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?hotel" alt="hotel" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?restaurant" alt="restaurant" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?nature" alt="nature" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?beach" alt=" beach" />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?beaches" alt="beaches" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?travel" alt="travel" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?city" alt="city" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?adventure, travel" alt="adventure" />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?sea" alt="sea" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?building" alt="building" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?tree" alt="tree" />
            </div>
            <div className="col s12 m3">
              <img className="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?climbing" alt="climbing" />
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Gallery;