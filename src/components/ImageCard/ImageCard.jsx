import css from "../ImageCard/ImageCard.module.css";

import PropTypes from "prop-types";

function ImageCard({ item, onImgClick }) {
  const {
    alt_description,
    urls: { small, regular },
  } = item;

  const handleImageClick = () => {
    if (typeof onImgClick === "function") {
      onImgClick(regular);
    }
  };

  return (
    <div className={css.ImageCard}>
      <img
        className={css.image}
        src={small}
        alt={alt_description}
        onClick={handleImageClick}
      />
    </div>
  );
}

ImageCard.propTypes = {
  item: PropTypes.object.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageCard;
