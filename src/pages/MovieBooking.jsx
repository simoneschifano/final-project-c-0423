import styles from "../styles/movieBooking.module.scss";
import Ellipse from "../assets/Ellipse.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { Context } from "../store/state.js";
import mock from "../utils/mock.json";
import ModalError from "../components/modalError";

const MovieBooking = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const selectedDateRef = useRef([]);
  const selectedHourRef = useRef([]);
  const selectedSeatRef = useRef([]);

  const [checkState, setCheckState] = useState(false);

  const selectedMovie = (paramId) =>
    state?.movieListData.filter((movie) => movie.id === parseInt(paramId));

  const selectionDate = [
    { id: 0, content: "20/04" },
    { id: 1, content: "21/04" },
    { id: 2, content: "22/04" },
    { id: 3, content: "23/04" },
    { id: 4, content: "24/04" },
    { id: 5, content: "25/04" },
  ];

  const selectionHour = [
    { id: 0, content: "16:00" },
    { id: 1, content: "18:00" },
    { id: 2, content: "20:00" },
    { id: 3, content: "22:00" },
    { id: 4, content: "00:00" },
  ];

  selectedDateRef.current = [];
  const addDateRef = (date) => {
    if (date && !selectedDateRef.current.includes(date)) {
      selectedDateRef.current.push(date);
    }
    const classNameArr = [];
    classNameArr.push(selectedDateRef.current.find((li) => li.className));
  };

  selectedHourRef.current = [];
  const addHourRef = (hour) => {
    if (hour && !selectedHourRef.current.includes(hour)) {
      selectedHourRef.current.push(hour);
    }
    const classNameArr = [];
    classNameArr.push(selectedHourRef.current.find((li) => li.className));
  };

  selectedSeatRef.current = [];
  const addRef = (seat) => {
    if (seat && !selectedSeatRef.current.includes(seat)) {
      selectedSeatRef.current.push(seat);
    }
  };
  const onHandleSelectedDate = (e) => {
    dispatch({ type: "SET_TICKET_DATE", payload: e.target.innerHTML });
    selectedDateRef.current[e.target.id]?.classList.toggle(
      `${styles.selected}`
    );
  };

  const onHandleSelectedHour = (e) => {
    dispatch({ type: "SET_TICKET_HOUR", payload: e.target.innerHTML });
    selectedHourRef.current[e.target.id]?.classList.toggle(
      `${styles.selected}`
    );
  };

  const onHandleSelectedSeat = (e) => {
    selectedSeatRef.current[e.target.id - 1].classList.toggle(
      `${styles.active}`
    );
    if (!state.ticketData.seat.includes(e.target.attributes.seat.value)) {
      dispatch({
        type: "SET_TICKET_SEAT",
        payload: e.target.attributes.seat.value,
      });
    } else {
      const index = state.ticketData.seat.indexOf(
        e.target.attributes.seat.value
      );
      return state.ticketData.seat.splice(index, 1);
    }
    console.log(state.ticketData.seat);
  };
  const onHandlePayment = () => {
    const dataCheck = selectedDateRef.current.filter((li) => li.className);
    const hourCheck = selectedHourRef.current.filter((li) => li.className);
    const seatCheck = selectedSeatRef.current.filter((div) =>
      div.className.includes("active")
    );
    if (
      dataCheck.length !== 1 ||
      hourCheck.length !== 1 ||
      seatCheck.length == 0
    ) {
      dispatch({ type: "SET_TICKET_DATE", payload: "" });
      dispatch({ type: "SET_TICKET_HOUR", payload: "" });
      dispatch({
        type: "SET_TICKET_SEAT",
        payload: "",
      });
      setCheckState(true);
    } else {
      dispatch({
        type: "SET_TICKET_MOVIE_TITLE",
        payload: selectedMovie(id)[0]?.title,
      });
      navigate(`/ticket/${id}/payment`);
    }
  };

  return (
    <div className={styles.MovieBooking}>
      <div className={styles.date_time_wrapper}>
        <h3>Acquista il tuo biglietto per:</h3>
        <h2>{selectedMovie(id)[0]?.title}</h2>
        <div className={styles.dateSection}>
          <p>Scegli una data</p>
          <ul>
            {selectionDate.map((day) => (
              <li
                id={day.id}
                key={day.id}
                onClick={onHandleSelectedDate}
                ref={addDateRef}
              >
                {day.content}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.hoursSection}>
          <p>Scegli un orario</p>
          <ul>
            {selectionHour.map((hour) => (
              <li
                id={hour.id}
                key={hour.id}
                onClick={onHandleSelectedHour}
                ref={addHourRef}
              >
                {hour.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.seats_legend_wrapper}>
        <img src={Ellipse} alt="Screen" />
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
        <button onClick={onHandlePayment}>Vai al pagamento</button>
      </div>

      {checkState && (
        <ModalError
          setCheckState={setCheckState}
          message={
            "Attenzione, bisogna selezionare una data e un orario e almeno un posto."
          }
        />
      )}
    </div>
  );
};

export default MovieBooking;
