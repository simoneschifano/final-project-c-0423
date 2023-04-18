import styles from "../styles/movieBooking.module.scss";
import Ellipse from "../assets/Ellipse.png";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/state.js";

const MovieBooking = () => {
  const { id } = useParams();
  const { state } = useContext(Context);
  const selectedMovie = (paramId) =>
    state?.movieListData.filter((movie) => movie.id === parseInt(paramId));
  return (
    <div className={styles.MovieBooking}>
      <h3>Acquista il tuo biglietto</h3>
      <h2>{selectedMovie(id)[0].title}</h2>
      <div className={styles.dateSection}>
        <p>Scegli una data</p>
        <ul>
          <li>20/04</li>
          <li>21/04</li>
          <li>22/04</li>
          <li>23/04</li>
          <li>24/04</li>
          <li>25/04</li>
        </ul>
      </div>
      <div className={styles.hoursSection}>
        <p>Scegli un orario</p>
        <ul>
          <li>16:00</li>
          <li>18:00</li>
          <li>20:00</li>
          <li>22:00</li>
          <li>00:00</li>
        </ul>
      </div>
      <img src={Ellipse} alt="Red Card" />
      <Link to={`/ticket/${id}/payment`}>Vai al pagamento</Link>
    </div>
  );
};

export default MovieBooking;
