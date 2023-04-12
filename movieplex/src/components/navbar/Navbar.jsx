import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<div className={styles.logo}>
				<img
					src={logo}
					alt="logo"
				/>
			</div>
			<div className={styles.icons}>
				<RxHamburgerMenu />
				<BiSearchAlt />
				<AiOutlineUserDelete />
			</div>
		</div>
	);
};

export default Navbar;
