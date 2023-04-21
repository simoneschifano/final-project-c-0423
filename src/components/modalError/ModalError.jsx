import styles from "./index.module.scss";

const ModalError = ({ setCheckState }) => {
  const onHandleCloseModal = () => {
    setCheckState(false);
  };
  return (
    <div className={styles.ModalError} onClick={onHandleCloseModal}>
      <div className={styles.modal_content}>
        <span onClick={onHandleCloseModal} className={styles.close}>
          &times;
        </span>
        <p className={styles.message}>
          Attenzione, bisogna selezionare UNA data e UN orario e almeno un
          posto.
        </p>
      </div>
    </div>
  );
};

export default ModalError;
