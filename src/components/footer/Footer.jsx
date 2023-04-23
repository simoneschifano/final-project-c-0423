import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.text}>
        <a href="/about-us">About us</a>
        <p>Segnala un bug</p>
        <p>Tutti i nostri cinema</p>
      </div>
      <div className={styles.rights}>
        <p>MoviePlex® 2023 tutti i diritti riservati </p>
      </div>
    </div>
  );
};

export default Footer;
