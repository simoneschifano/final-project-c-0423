import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/state";
import Modal from "../modal";

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const userMenu = () => {
    // dispatch({ type: "SET_MODAL_CLOSE" });
    dispatch({ type: "SET_MODAL_OPEN" });
    dispatch({ type: "SET_MODAL_CONTENT_USER" });
  };
  const burgerMenu = () => {
    // dispatch({ type: "SET_MODAL_CLOSE" });
    dispatch({ type: "SET_MODAL_OPEN" });
    dispatch({ type: "SET_MODAL_CONTENT_BURGER" });
  };
  const searchMenu = () => {
    // dispatch({ type: "SET_MODAL_CLOSE" });
    dispatch({ type: "SET_MODAL_OPEN" });
    dispatch({ type: "SET_MODAL_CONTENT_SEARCH" });
  };

  const onHandleLogoClick = () => {
    navigate("/");
    dispatch({ type: "SET_MODAL_CLOSE" });
  };

  return (
    <>
      <div className={`${styles.Navbar} ${state.visible && styles.fixed}`}>
        <div className={styles.logo} onClick={onHandleLogoClick}>
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
      </div>
      <Modal />
    </>
  );
};

export default Navbar;
