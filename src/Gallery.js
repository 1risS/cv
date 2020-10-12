import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
    };

    this.toggleLightbox = this.toggleLightbox.bind(this);
  }
  toggleLightbox() {
    const { onChange } = this.props;
    this.setState(
      (state) => ({
        lightboxIsOpen: !state.lightboxIsOpen,
      }),
      () => onChange(this.state.lightboxIsOpen)
    );
  }
  renderGallery(images) {
    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image fit thumb"
            href={obj.source}
            onClick={(e) => {
              e.preventDefault();
              this.toggleLightbox();
            }}
          >
            <div className="galleryContainer">
              <img
                className="thumbnail"
                alt="thumbnail"
                height="250"
                src={obj.source}
              />
            </div>
          </a>

          <h3>{obj.caption}</h3>
          <p>{obj.description}</p>
        </article>
      );
    });

    return <div className="row">{gallery}</div>;
  }
  render() {
    const { images, index } = this.props;
    const { lightboxIsOpen } = this.state;

    return (
      <div>
        {this.renderGallery([images[0]])}
        <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={index} views={images} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    );
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  images: PropTypes.array,
};
Gallery.defaultPropTypes = {
  images: [],
};

export default Gallery;
