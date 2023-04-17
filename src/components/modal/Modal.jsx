import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store/state";
import AccModal from "../accModal/AccModal";
import SearchModal from "../searchModal/SearchModal";
import HamburgerMenu from "../hamburgerMenu";
import { BsArrowLeft } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const onHandleBackArrow = () => {
    dispatch({ type: "SET_MODAL_CLOSE" });
  };

  return (
    <div
      className={`${styles.modalWrap}
     ${state.visible ? styles.show : ""}`}
    >
      <BsArrowLeft className={styles.backArrow} onClick={onHandleBackArrow} />

      {state.iconPush.burger && <HamburgerMenu />}
      {state.iconPush.search && <SearchModal />}
      {state.iconPush.user && <AccModal />}

      <img className={styles.logo} src={logo} alt="popcorn" />
    </div>
  );
};

export default Modal;
