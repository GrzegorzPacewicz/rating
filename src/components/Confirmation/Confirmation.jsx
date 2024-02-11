import styles from "./Confirmation.module.css";
import thanksIcon from "../../assets/illustration-thank-you.svg";

export function Confirmation() {
  return (
    <div className={styles.container}>
      <img
        className={styles.thanksIcon}
        src={thanksIcon}
        alt="Thank You icon"
      />
      <p className={styles.selection}>You selected out of 5 </p>
      <h1 className={styles.title}>Thank You!</h1>
      <p className={styles.text}>
        We appreciate you taking the time to give a rating.
      </p>
      <p className={styles.text}>
        If you ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
