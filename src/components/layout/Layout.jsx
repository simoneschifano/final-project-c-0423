import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import Navbar from "../navbar";
import Footer from "../footer";
import { Context } from "../../store/state";
import { useContext } from "react";

const Layout = () => {
  const { state } = useContext(Context);
  return (
    <div className={styles.Layout}>
      <Navbar />
      <div className={styles.rightTriangle}></div>
      <section className={`${state.visible && styles.noscroll}`}>
        <Outlet />
      </section>
      <div className={styles.leftTriangle}></div>
      <Footer />
    </div>
  );
};

export default Layout;
