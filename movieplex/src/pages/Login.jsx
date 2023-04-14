import styles from "../styles/boh.module.scss";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<div className={styles.LoginPage}>
			<form className={styles.loginForm}>
				<h4>Login</h4>
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
				<input
					type="submit"
					value="Entra"
					className={styles.Button}
				/>
			</form>

			<h4>Non sei ancora registrato?</h4>
			<button className={styles.Button}>
				<Link to={"/register"}>Registrati</Link>
			</button>
		</div>
	);
};

export default Login;
