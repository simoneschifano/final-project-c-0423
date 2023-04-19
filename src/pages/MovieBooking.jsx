import styles from "../styles/movieBooking.module.scss";
import Ellipse from "../assets/Ellipse.png";
import { Link, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/state.js";

const MovieBooking = () => {
  const { id } = useParams();
  const { state } = useContext(Context);
  const selectedMovie = (paramId) =>
    state?.movieListData.filter((movie) => movie.id === parseInt(paramId));
  const onHandleClickSelection = (day) => {
    setSelection(() => !selection[day.id].isSelected);
    console.log(selection);
  };

  const [selection, setSelection] = useState([
    { id: 0, isSelected: false, content: "20/04" },
    { id: 1, isSelected: false, content: "21/04" },
    { id: 2, isSelected: false, content: "22/04" },
    { id: 3, isSelected: false, content: "23/04" },
    { id: 4, isSelected: false, content: "24/04" },
    { id: 5, isSelected: false, content: "25/04" },
  ]);

  return (
    <div className={styles.MovieBooking}>
      <h3>Acquista il tuo biglietto</h3>
      <h2>{selectedMovie(id)[0]?.title}</h2>
      <div className={styles.dateSection}>
        <p>Scegli una data</p>
        <ul>
          {selection.map((day) => (
            <li
              className={day.isSelected ? styles.selected : ""}
              onClick={() => onHandleClickSelection(day)}
            >
              {day.content}
            </li>
          ))}
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
