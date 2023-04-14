import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../store/state";
import Modal from "../modal";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { state, dispatch } = useContext(Context);

  const userMenu = () => {
    dispatch({ type: "SET_MODAL_CLOSE" });
    dispatch({ type: "SET_MODAL_CONTENT_USER", payload: "aaaaa" });
  };
  const burgerMenu = () => {
    dispatch({ type: "SET_MODAL_CLOSE" });
    dispatch({ type: "SET_MODAL_CONTENT_BURGER", payload: "aaaaa" });
  };
  const searchMenu = () => {
    dispatch({ type: "SET_MODAL_CLOSE" });
    dispatch({ type: "SET_MODAL_CONTENT_SEARCH", payload: "aaaaa" });
  };

  // console.log(state);
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.icons_mobile}>
        <RxHamburgerMenu onClick={burgerMenu} />
        <BiSearchAlt onClick={searchMenu} />
        <AiOutlineUserDelete className={styles.userIcon} onClick={userMenu} />
      </div>
      <div className={styles.links_desktop}>
        <p>Prossime uscite</p>
        <p>Card e Promo</p>
      </div>
      <div className={styles.login_desktop}>
        <Link className={styles.Link} to={"/login"}>
          Login o Registrati
        </Link>
      </div>
      {/* <Modal visible={visible} setVisible={setVisible} /> */}
      {state.visible && <Modal />}
    </div>
  );
};

export default Navbar;
