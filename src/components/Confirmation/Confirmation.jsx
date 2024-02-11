import styles from "./Confirmation.module.css";

export function Confirmation() {
  return (
    <div className={styles.container}>
      <p>You selected out of 5 </p>
      <h1 className={styles.title}>Thank You!</h1>
      <p className={styles.text}>
        We appreciate you taking the time to give a rating.
      </p>
      <p className={styles.text}>
        {" "}
        If you ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
