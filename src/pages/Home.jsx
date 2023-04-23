import styles from "../styles/Home.module.scss";
import CategoryInput from "../components/categoryInput/CategoryInput";
import Carousel from "../components/carousel";
import { useState } from "react";
import CardList from "../components/cardList";
import { useContext } from "react";
import { Context } from "../store/state.js";
function App() {
	const [categoryId, setCategoryId] = useState(0);
	const { state } = useContext(Context);
	const cardArrayData = state.movieListData?.map((movie) => ({
		id: movie.id,
		poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
	}));

	return (
		<div className={styles.App}>
			<div className={styles.respTopHome}>
				<CategoryInput setCategoryId={setCategoryId} />
				<Carousel cardArrayData={cardArrayData} />
			</div>
			<CardList categoryId={categoryId} />
		</div>
	);
}

export default App;
