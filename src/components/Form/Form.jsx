import styles from "./Form.module.css";
import starIcon from "../../assets/icon-star.svg";

export function Form() {
  const labels = [
    { number: 1, value: 1 },
    { number: 2, value: 2 },
    { number: 3, value: 3 },
    { number: 4, value: 4 },
    { number: 5, value: 5 },
    { number: 6, value: 6 },
  ];

  return (
    <div className={styles.container}>
      <img className={styles.starIcon} src={starIcon} alt="star icon" />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className={styles.formContainer}>
        <div className={styles.labelsContainer}>
          {labels.map(({ number, value }) => (
            <label key={number} value={value} className={styles.label}>
              {number}
            </label>
          ))}
        </div>
        <button className={styles.formBtn}>Submit</button>
      </form>
    </div>
  );
}
