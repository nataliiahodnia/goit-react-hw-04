import { Hearts } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";
export default function Loader() {
  return (
      <div className={css.container}>
        <Hearts
          height="180"
          width="180"
          color="#e67dd5"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
  );
}
