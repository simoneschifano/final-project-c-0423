import styles from '../styles/TicketBuy.module.scss'
import Ap from '../assets/a_pay.png'
import Cc from '../assets/cc.png'
import Gp from '../assets/g_pay.png'
import Pp from '../assets/pp.png'

const TicketBuy = () => {
	return (
		<div className={styles.payment__wrapper}>
			<h3>Termina e Paga</h3>
			<div className={styles.payment__section}>
				<p>Seleziona un metodo di pagamento</p>
				<form className={styles.payment__typo}>
					<label>
						<input className={styles.Ap}
							type="radio"
							name="payment-method"
							checked-value="apple-pay"
						></input>
						<img src={Ap} alt="Apple-Pay"></img>
					</label>
					<label>
						<input className={styles.Gp}
							type="radio"
							name="payment-method"
							value="google-pay"
						></input>
						<img src={Gp} alt="Google-Pay"></img>
					</label>
					<label>
						<input className={styles.Cc}
							type="radio"
							name="payment-method"
							value="credit-card"
						></input>
						<img src={Cc} alt="Credit-Card"></img>
					</label>
					<label>
						<input className={styles.Pp}
							type="radio"
							name="payment-method"
							value="paypal"
						></input>
						<img src={Pp} alt="PayPal"></img>
					</label>
				</form>
			</div>
			<input className={styles.searchBtn} type="submit" value={"Paga ora"} />
		</div>
	)
};

export default TicketBuy;
