import { useEffect } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import PropTypes from "prop-types";

function ImageModal({ isOpen, onClose, imageUrl }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.Overlay}
      className={css.Modal}
      onOverlayClick={handleOverlayClick}
    >
      <img src={imageUrl} alt="Modal" className={css.photo} />
    </Modal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ImageModal;
