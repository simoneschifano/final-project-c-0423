import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.LoginPage}>
      <form className={styles.loginForm}>
        <h3>Login</h3>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Nome Utente"
        />
        <input
          className={styles.textInput}
          type="password"
          placeholder="Password"
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
    </div>
  );
};

export default Login;
