import styles from "../styles/register.module.scss";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { initRegisteredUsers } from "../store/state";
import { mainReducer } from "../store/reducer";

const Register = () => {
  const [state, dispatch] = useReducer(mainReducer, initRegisteredUsers);

  const navigate = useNavigate();

  const onHandleUserInput = (e) => (state.protoUser.username = e.target.value);
  const onHandlePassInput = (e) => (state.protoUser.password = e.target.value);
  const onHandleNomeInput = (e) => (state.protoUser.nome = e.target.value);
  const onHandleCognomeInput = (e) =>
    (state.protoUser.cognome = e.target.value);
  const onHandleEmailInput = (e) => (state.protoUser.email = e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CREATE_NEW_USER", payload: state.protoUser });
    localStorage.setItem("auth", state.protoUser.username);
    navigate(`/?user=${state.protoUser.username}`);
  };

  return (
    <div className={styles.RegisterPage}>
      <form className={styles.registerForm} onSubmit={onHandleSubmit}>
        <h3>Registrati</h3>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Nome Utente"
          onChange={onHandleUserInput}
        />
        <input
          className={styles.textInput}
          type="password"
          placeholder="Password"
          onChange={onHandlePassInput}
        />
        <input
          className={styles.textInput}
          type="email"
          placeholder="Email"
          onChange={onHandleEmailInput}
        />

        <div className={styles.anagrafe}>
          <input className={styles.textInput} type="text" placeholder="Nome" />
          <input
            className={styles.textInput}
            type="text"
            placeholder="Cognome"
            onChange={onHandleNomeInput}
          />
        </div>
        <input
          type="submit"
          value="Entra"
          className={styles.Button}
          onChange={onHandleEmailInput}
        />
      </form>
    </div>
  );
};

export default Register;
