import styles from "../styles/register.module.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.RegisterPage}>
      <form className={styles.registerForm}>
        <h3>Registrati</h3>
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
        <input className={styles.textInput} type="email" placeholder="Email" />
        <div className={styles.anagrafe}>
          <input className={styles.textInput} type="text" placeholder="Nome" />
          <input
            className={styles.textInput}
            type="text"
            placeholder="Cognome"
          />
        </div>
        <input type="submit" value="Entra" className={styles.Button} />
      </form>
    </div>
  );
};

export default Register;
