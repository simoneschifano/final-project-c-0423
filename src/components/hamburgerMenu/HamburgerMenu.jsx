import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import popcornIcon from "../../assets/popcornIcon.png";

const HamburgerMenu = () => {
  const onHandleCloseModal = () => {
    dispatch({ type: "SET_MODAL_CLOSE" });
  };
  return (
    <div className={styles.HamburgerMenu}>
      <Link to="/" onClick={onHandleCloseModal}>
        <h3>Home</h3>
      </Link>
      <h3>Film più amati</h3>
      <Link to="/cardPromo" onClick={onHandleCloseModal}>
        <h3>Card e Promo</h3>
      </Link>
      <img className={styles.img} src={popcornIcon} alt="popcorn" />
    </div>
  );
};

export default HamburgerMenu;
