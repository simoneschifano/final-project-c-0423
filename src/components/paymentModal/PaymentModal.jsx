import styles from "./payment.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/state";

const PaymentModal = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);

  const onHandleCloseModal = () => {
    dispatch({ type: "SET_PAYMENT_MODAL_CLOSE" });
    navigate(`/`);
    state.ticketData.seat.length = 0;
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span onClick={onHandleCloseModal} className={styles.close}>
          &times;
        </span>
        <h3 className={styles.success_message}>
          Acquisto effettuato con successo!
        </h3>
        <p>Hai prenotato i posti:</p>
        {state.ticketData.seat.map((seat) => (
          <strong>
            <p>{seat}</p>
          </strong>
        ))}
        <p>
          per giorno <strong>{state.ticketData.date} </strong> alle ore{" "}
          <strong>{state.ticketData.hour}</strong> per lo spettacolo:
        </p>
        <h3>{state.ticketData.title} </h3>
      </div>
    </div>
  );
};

export default PaymentModal;
