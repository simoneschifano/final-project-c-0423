import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const AccModal = ({ visible, setVisible }) => {
	const navigate = useNavigate();

	const onHandleLoginRed = () => {
		navigate(`/login`);
		setVisible(() => !visible);
	};
	const onHandleLogout = () => localStorage.removeItem("auth");
	console.log(localStorage.getItem("auth"));

	return (
		<div>
			{localStorage.getItem("auth") ? (
				<div className={styles.yes_auth}>
					<div className={styles.accInfo}>
						<img
							src=""
							alt="foto profilo"
						/>
						{/* <span>{user?.username}</span> */}
						<span>username</span>
					</div>
					<ul className={styles.accOpts}>
						<li>Dettagli profilo</li>
						<li>I tuoi biglietti</li>
						<li>Le tue Card e promo</li>
						<li>Modifica la password</li>
					</ul>
					<p onClick={onHandleLogout}>Esci</p>
				</div>
			) : (
				<div className={styles.no_auth}>
					<p>Hai già un account? Clicca qui per fare il login!</p>
					<button
						className={styles.loginBtn}
						onClick={onHandleLoginRed}>
						Login
					</button>
				</div>
			)}
		</div>
	);
};

export default AccModal;
