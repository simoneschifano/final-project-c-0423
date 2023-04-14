import { Outlet } from "react-router-dom";
import { useReducer, useEffect } from "react";
import { initialState, Context } from "../../store/state";
import { GET } from "../../utils/http";
import { mainReducer } from "../../store/reducer";
import styles from "./index.module.scss";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = () => {
	useEffect(() => {
		GET(process.env.REACT_PUBLIC_API_URL).then((data) => {
			const moviesData = data.results;
			dispatch({ type: "SET_MOVIE_LIST", payload: moviesData });
		});
	}, []);
	const [state, dispatch] = useReducer(mainReducer, initialState);
	return (
		<div className={styles.Layout}>
			<Context.Provider value={{ state, dispatch }}>
				<Navbar />
				<section>
					<Outlet />
				</section>
				<Footer />
			</Context.Provider>
		</div>
	);
};

export default Layout;
