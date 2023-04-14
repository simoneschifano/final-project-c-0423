import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store/state";
import AccModal from "../accModal/AccModal";
import SearchModal from "../searchModal/SearchModal";

const Modal = ({ visible, setVisible }) => {
	const { state, dispatch } = useContext(Context);

	return (
		<div className={`${styles.modalWrap} ${visible ? styles.show : ""}`}>
			{state.iconPush.burger && <div>aa</div>}
			{state.iconPush.search && <SearchModal />}
			{state.iconPush.user && <AccModal />}
		</div>
	);
};

export default Modal;
