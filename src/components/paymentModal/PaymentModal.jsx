import styles from './payment.module.scss'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/state";

const PaymentModal = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(Context);

    const onHandleCloseModal = () => {
        dispatch({ type: "SET_PAYMENT_MODAL_CLOSE" });
        navigate(`/`);
    }

    return (
        <div className={styles.modal} >
            <div className={styles.modal_content}>
                <span onClick={onHandleCloseModal} className={styles.close}>&times;</span>
                <p className={styles.success_message}>Acquisto effettuato con successo!</p>
                <p>Hai prenotato i posti per giorno alle ore per lo spettacolo di:</p>
                <h3>titolo film</h3>
            </div>
        </div >
    )
}

export default PaymentModal