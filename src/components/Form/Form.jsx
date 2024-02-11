import styles from "./Form.module.css";
import starIcon from "../../assets/icon-star.svg";

export function Form({ formData, handleChange, handleSubmit }) {
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

      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.labelsContainer}>
          {labels.map(({ number, value }) => (
            <label
              key={number}
              className={
                formData.formValue === `${value}`
                  ? `${styles.label} ${styles.selected}`
                  : styles.label
              }
              htmlFor={`rating-${number}`}
            >
              {number}

              <input
                className={styles.input}
                type="radio"
                name="rating"
                id={`rating-${number}`}
                value={value}
                onChange={handleChange}
              />
            </label>
          ))}
        </div>

        <button className={styles.formBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
