import React, { PureComponent } from "react";
import "./Gallery.css";

const images = [
  ["Jeeraslide", "Jinthaaaslide", "lemonadeslide"],
  ["Jeeraslide", "Jinthaaaslide", "lemonadeslide"],
  ["Jeeraslide", "Jinthaaaslide", "lemonadeslide"]
];
class Gallery extends PureComponent {
  state = {
    viewImage: null
  };

  setViewImage = (viewImage = null) => {
    this.setState({
      viewImage
    });
  };

  renderImage(arr) {
    return (
      
      <div className="row-container">
        {arr.map((key, i) => (
          <img
            onClick={() => this.setViewImage(key)}
            src={`../images/${key}.png`}
            alt={key}
            key={i}
            className="thumbnail"
          />
        ))}
      </div>
    );
  }

  render() {
    if (this.state.viewImage) {
      return (
        <div className="view__container">
          <button
            className="view__close"
            onClick={() => this.setViewImage(null)}
          >
            x
          </button>
          <img
            src={`../images/${this.state.viewImage}.png`}
            alt={this.state.viewImage}
            className="view__image"
          />
        </div>
      );
    }

    return <div>{images.map(row => this.renderImage(row))}</div>;
  }
}

export default Gallery;
