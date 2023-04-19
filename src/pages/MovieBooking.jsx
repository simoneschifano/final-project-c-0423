import styles from "../styles/movieBooking.module.scss";
import Ellipse from "../assets/Ellipse.png";
import { Link, useParams } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { Context } from "../store/state.js";
import mock from "../utils/mock.json";

const MovieBooking = () => {
  const { id } = useParams();
  const { state } = useContext(Context);
  const selectedSeatRef = useRef([]);
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

  selectedSeatRef.current = [];
  const addRef = (seat) => {
    if (seat && !selectedSeatRef.current.includes(seat)) {
      selectedSeatRef.current.push(seat);
    }
  };

  const onHandleSelectedSeat = (e) => {
    selectedSeatRef.current[e.target.id - 1].classList.toggle(
      `${styles.active}`
    );
  };

  return (
    <div className={styles.MovieBooking}>
      <h3>Acquista il tuo biglietto</h3>
      <h2>{selectedMovie(id)[0]?.title}</h2>
      <div className={styles.dateSection}>
        <p>Scegli una data</p>
        <ul>
          {selection.map((day) => (
            <li
              key={day.id}
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
      <div className={styles.roomWrapper}>
        <div className={styles.leftSeat}>
          {mock.slice(0, 14).map((item) => (
            <div
              className={`${styles.seat} ${
                item.available ? styles.available : styles.booked
              }`}
              id={item.available ? item.id : null}
              seat={`${item.seat[0].number}${item.seat[0].row}`}
              key={item.id}
              ref={addRef}
              onClick={onHandleSelectedSeat}
            ></div>
          ))}
        </div>
        <div className={styles.centerSeat}>
          {mock.slice(14, 56).map((item) => (
            <div
              className={`${styles.seat} ${
                item.available ? styles.available : styles.booked
              }`}
              key={item.id}
              id={item.available ? item.id : null}
              seat={`${item.seat[0].number}${item.seat[0].row}`}
              ref={addRef}
              onClick={onHandleSelectedSeat}
            ></div>
          ))}
        </div>
        <div className={styles.rightSeat}>
          {mock.slice(56, 70).map((item) => (
            <div
              className={`${styles.seat} ${
                item.available ? styles.available : styles.booked
              }`}
              key={item.id}
              id={item.available ? item.id : null}
              seat={`${item.seat[0].number}${item.seat[0].row}`}
              ref={addRef}
              onClick={onHandleSelectedSeat}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.legend}>
        <div>
          <div className={`${styles.seat} ${styles.booked} `}></div>
          <span>Non Disponibile</span>
        </div>
        <div>
          <div className={`${styles.seat} ${styles.available} `}></div>
          <span>Disponibile</span>
        </div>
        <div>
          <div className={`${styles.seat} ${styles.active} `}></div>
          <span>Selezione</span>
        </div>
      </div>
      <Link to={`/ticket/${id}/payment`}>Vai al pagamento</Link>
    </div>
  );
};

export default MovieBooking;
