import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = () => {
	return (
		<div className={styles.Layout}>
			<Navbar />
			<section>
				<Outlet />
			</section>
			<Footer />
		</div>
	);
};

export default Layout;
