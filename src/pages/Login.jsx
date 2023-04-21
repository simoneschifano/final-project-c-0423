import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useState, useReducer } from "react";
import { initRegisteredUsers } from "../store/state";
import { mainReducer } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import ModalError from "../components/modalError";

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
      : (setModalstate(true),
        // alert("La password o la mail non è corretta"),
        setPassword(""),
        setUsername(""));
  };
  return (
    <div className={styles.LoginPage}>
      {console.log(state.users)}
      <form className={styles.loginForm} onSubmit={onHandleSubmit}>
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
        <input type="submit" value="Entra" className={styles.Button} />
      </form>
      <div className={styles.registerSection}>
        <p>Non sei ancora registrato?</p>
        <button className={styles.Button}>
          <Link to={"/register"}>Registrati</Link>
        </button>
      </div>
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
