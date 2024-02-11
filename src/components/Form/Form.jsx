import styles from "./Form.module.css";
import starIcon from "../../assets/icon-star.svg";

export function Form() {
  return (
    <div className={styles.container}>
      <img className={styles.starIcon} src={starIcon} />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className={styles.form__container}>
        <div className={styles.labels__container}>
          <label className={styles.label}>1</label>
          <label className={styles.label}>1</label>{" "}
          <label className={styles.label}>1</label>{" "}
          <label className={styles.label}>1</label>{" "}
          <label className={styles.label}>1</label>{" "}
          <label className={styles.label}>1</label>{" "}
        </div>
        <button className={styles.form__btn}>Submit</button>
      </form>
    </div>
  );
}
