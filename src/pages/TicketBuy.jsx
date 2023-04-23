import styles from "../styles/TicketBuy.module.scss";
import Ap from "../assets/a_pay.png";
import Cc from "../assets/cc.png";
import Gp from "../assets/g_pay.png";
import Pp from "../assets/pp.png";
import PaymentModal from "../components/paymentModal";
import { useState, useContext } from "react";
import { Context } from "../store/state";
import image from "../assets/image.png";

const TicketBuy = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleSuccessModal = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_PAYMENT_MODAL_OPEN" });
  };

  return (
    <div className={styles.payment__wrapper}>
      <div className={styles.payment__section}>
        <h3>Termina e Paga</h3>
        <p>Seleziona un metodo di pagamento</p>
        <form onSubmit={onHandleSuccessModal}>
          <div className={styles.payment__typo}>
            <label>
              <input
                className={styles.Ap}
                type="radio"
                name="payment-method"
                value="apple-pay"
                defaultChecked
              ></input>
              <img src={Ap} alt="Apple-Pay"></img>
            </label>
            <label>
              <input
                className={styles.Gp}
                type="radio"
                name="payment-method"
                value="google-pay"
              ></input>
              <img src={Gp} alt="Google-Pay"></img>
            </label>
            <label>
              <input
                className={styles.Cc}
                type="radio"
                name="payment-method"
                value="credit-card"
              ></input>
              <img src={Cc} alt="Credit-Card"></img>
            </label>
            <label>
              <input
                className={styles.Pp}
                type="radio"
                name="payment-method"
                value="paypal"
              ></input>
              <img src={Pp} alt="PayPal"></img>
            </label>
          </div>
          <div className={styles.total_btn_wrapper}>
            <div className={styles.total_wrapper}>
              <h3 className={styles.total}>
                Totale: €{state.ticketData.seat.length * 6}{" "}
              </h3>
            </div>
            <input
              className={styles.searchBtn}
              type="submit"
              value={"Paga ora"}
            />
          </div>
        </form>
        {state.paymentModalVisible && <PaymentModal />}
      </div>
      <img className={styles.backgroundImage} src={image} alt="image" />
    </div>
  );
};

export default TicketBuy;
