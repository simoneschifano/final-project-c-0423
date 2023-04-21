import styles from "../styles/TicketBuy.module.scss";
import Ap from "../assets/a_pay.png";
import Cc from "../assets/cc.png";
import Gp from "../assets/g_pay.png";
import Pp from "../assets/pp.png";
import PaymentModal from "../components/paymentModal";
import { useContext } from "react";
import { Context } from "../store/state";

const TicketBuy = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleSuccessModal = () => {
    !state.methodCheckControl.CC &&
    !state.methodCheckControl.PP &&
    !state.methodCheckControl.GP &&
    !state.methodCheckControl.AP
      ? alert("Selezionare un metodo di pagamento")
      : dispatch({ type: "SET_PAYMENT_MODAL_OPEN" });
  };

  const aPChecked = () => dispatch({ type: "SET_AP_CHECK" });
  const gPChecked = () => dispatch({ type: "SET_GP_CHECK" });
  const cCChecked = () => dispatch({ type: "SET_CC_CHECK" });
  const pPChecked = () => dispatch({ type: "SET_PP_CHECK" });

  return (
    <div className={styles.payment__wrapper}>
      <h3>Termina e Paga</h3>
      <div className={styles.payment__section}>
        <p>Seleziona un metodo di pagamento</p>
        <form className={styles.payment__typo}>
          <label>
            <input
              onClick={aPChecked}
              className={styles.Ap}
              type="radio"
              name="payment-method"
              value="apple-pay"
            ></input>
            <img src={Ap} alt="Apple-Pay"></img>
          </label>
          <label>
            <input
              onClick={gPChecked}
              className={styles.Gp}
              type="radio"
              name="payment-method"
              value="google-pay"
            ></input>
            <img src={Gp} alt="Google-Pay"></img>
          </label>
          <label>
            <input
              onClick={cCChecked}
              className={styles.Cc}
              type="radio"
              name="payment-method"
              value="credit-card"
            ></input>
            <img src={Cc} alt="Credit-Card"></img>
          </label>
          <label>
            <input
              onClick={pPChecked}
              className={styles.Pp}
              type="radio"
              name="payment-method"
              value="paypal"
            ></input>
            <img src={Pp} alt="PayPal"></img>
          </label>
        </form>
        <div className={styles.total_wrapper}>
          <h3 className={styles.total}>Totale: $20,00 </h3>
        </div>
        <input
          onClick={onHandleSuccessModal}
          className={styles.searchBtn}
          type="submit"
          value={"Paga ora"}
        />
        {state.paymentModalVisible && <PaymentModal />}
      </div>
    </div>
  );
};

export default TicketBuy;
