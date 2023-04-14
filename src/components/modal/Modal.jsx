import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store/state";
import AccModal from "../accModal/AccModal";
import SearchModal from "../searchModal/SearchModal";
import HamburgerMenu from "../hamburgerMenu";

const Modal = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div
      className={`${styles.modalWrap}
     ${state.visible ? styles.show : ""}`}
    >
      {state.iconPush.burger && <HamburgerMenu />}
      {state.iconPush.search && <SearchModal />}
      {state.iconPush.user && <AccModal />}
    </div>
  );
};

export default Modal;
