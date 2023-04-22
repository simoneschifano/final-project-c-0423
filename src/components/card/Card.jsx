import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/state";

const Card = ({ data }) => {
	const navigate = useNavigate();

	const { dispatch } = useContext(Context);

	const onHandleClick = () => {
		navigate(`/movie/${data.id}`);
		dispatch({ type: "SET_MODAL_CLOSE" });
	};

	const onHandleIfRedirect = () => {
		localStorage.getItem("auth")
			? navigate(`/ticket/${data.id}/booking`)
			: navigate("/login");
	};

	return (
		<div className={styles.Card}>
			<img
				className={styles.img}
				src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
				alt="{movie.title}"
				onClick={onHandleClick}
			/>

			<a onClick={onHandleIfRedirect}>Acquista il biglietto</a>
		</div>
	);
};

export default Card;
