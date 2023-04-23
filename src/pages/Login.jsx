import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useState, useReducer } from "react";
import { initRegisteredUsers } from "../store/state";
import { mainReducer } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import ModalError from "../components/modalError";
import image from "../assets/image.png";

const Login = () => {
  const [state, dispatch] = useReducer(mainReducer, initRegisteredUsers);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalState, setModalstate] = useState(false);
  const navigate = useNavigate();

  const onHandleUserInput = (e) => setUsername(() => e.target.value);
  const onHandlePassInput = (e) => setPassword(() => e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    state.users.find(
      (user) => user.password === password && user.username === username
    )
      ? (localStorage.setItem("auth", username), navigate(`/?user=${username}`))
      : (setModalstate(true), setPassword(""), setUsername(""));
  };
  return (
    <div className={styles.LoginPage}>
      <div className={styles.forms}>
        <form className={styles.loginForm} onSubmit={onHandleSubmit}>
          <p>Accedi per prenotare il tuo biglietto</p>
          <h3>Login</h3>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Nome Utente"
            value={username}
            onChange={onHandleUserInput}
          />
          <input
            className={styles.textInput}
            type="password"
            placeholder="Password"
            value={password}
            onChange={onHandlePassInput}
          />
          <p>Recupera la password</p>
          <button className={styles.Button}>Entra</button>
        </form>
        <div className={styles.registerSection}>
          <p>Non sei ancora registrato?</p>
          <button className={styles.Button} onClick={() => navigate("/register")}>
            Registrati
          </button>
        </div>
      </div>
      <img className={styles.backgroundImage} src={image} alt="image" />
      {modalState && (
        <ModalError
          setCheckState={setModalstate}
          message={"Nome utente o password incorretti"}
        />
      )}
    </div>
  );
};

export default Login;
