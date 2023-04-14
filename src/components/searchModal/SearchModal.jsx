import { useState, useContext } from "react";
import { Context } from "../../store/state";

const SearchModal = () => {
	const [inputMovieName, setInputMovieName] = useState("");
	const [submitMovieName, setSubmitMovieName] = useState("");
	const { state } = useContext(Context);
	const filterMovies = state.movieListData.filter(
		(movie) => movie.title == submitMovieName,
	);

	const onHandleChangeName = (e) => setInputMovieName(() => e.target.value);
	const onSubmitSearch = (e) => {
		e.preventDefault();
		setSubmitMovieName(inputMovieName);
	};
	return (
		<div>
			<form
				action=""
				onSubmit={onSubmitSearch}>
				<label htmlFor="movieInput">Cerca il film</label>
				<input
					type="text"
					name="movieInput"
					onChange={onHandleChangeName}
				/>
				<input
					type="submit"
					value={"Cerca"}
				/>
			</form>
		</div>
	);
};

export default SearchModal;
