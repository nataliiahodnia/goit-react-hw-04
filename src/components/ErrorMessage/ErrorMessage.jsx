import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <p className={css.errorMessage}>
        Something went wrong!
        <br />
        Well, reload the page again!
      </p>
    </>
  );
}
