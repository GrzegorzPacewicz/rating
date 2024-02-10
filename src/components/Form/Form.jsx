import styles from "./Form.module.css";

export function Form() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className={styles.form__container}>
        <div className={styles.labels__container}>buttons</div>
        <button className={styles.form__btn}>Submit</button>
      </form>
    </div>
  );
}
