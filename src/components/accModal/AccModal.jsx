import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/state";

const AccModal = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);

  const onHandleLoginRed = () => {
    navigate(`/login`);
    dispatch({ type: "SET_MODAL_CLOSE" });
  };
  const onHandleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  console.log(localStorage.getItem("auth"));

  return (
    <div className={styles.AccModal}>
      {localStorage.getItem("auth") ? (
        <div className={styles.yes_auth}>
          <div className={styles.accInfo}>
            <img
              className={styles.userImg}
              src={`https://robohash.org/${localStorage.auth}`}
              alt="foto profilo"
            />

            <span>{localStorage.auth}</span>
          </div>
          <ul className={styles.accOpts}>
            <li>Dettagli profilo</li>
            <li>I tuoi biglietti</li>
            <li>Le tue Card e promo</li>
            <li>Modifica la password</li>
            <p onClick={onHandleLogout}>Esci</p>
          </ul>
        </div>
      ) : (
        <div className={styles.no_auth}>
          <p>Hai già un account?</p>
          <p>Clicca qui per effettuare l'accesso</p>
          <button className={styles.loginBtn} onClick={onHandleLoginRed}>
            Login/Registrati
          </button>
        </div>
      )}
    </div>
  );
};

export default AccModal;
