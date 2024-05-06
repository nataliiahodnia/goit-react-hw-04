import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import PropTypes from "prop-types";

function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.gallery}>
      {items.map((item, index) => (
        <li className={css.galleryItem} key={`${item.id}-${index}`}>
          <ImageCard item={item} onImgClick={openModal} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
