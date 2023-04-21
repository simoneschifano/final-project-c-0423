import styles from "./index.module.scss";

const ModalError = ({ setCheckState, message }) => {
  const onHandleCloseModal = () => {
    setCheckState(false);
  };
  return (
    <div className={styles.ModalError} onClick={onHandleCloseModal}>
      <div className={styles.modal_content}>
        <span onClick={onHandleCloseModal} className={styles.close}>
          &times;
        </span>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default ModalError;
