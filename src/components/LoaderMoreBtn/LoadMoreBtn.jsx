import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";
import { GoHeartFill } from "react-icons/go";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.loadBtn} onClick={onClick}>
      Load More <GoHeartFill />
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
