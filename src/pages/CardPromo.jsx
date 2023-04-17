import styles from "../styles/CardPromo.module.scss";
import GoldCard from "../assets/Cardoro.png";
import RedCard from "../assets/Cardrossa.png";
export default function CardPromo() {
  return (
    <div className={styles.CardPromo}>
      <h1 className={styles.title}>Card e Promo</h1>
      <div className={styles.wrapper}>
        <div className={styles.topLeftCard}>
          <img src={GoldCard} alt="Gold Card" />
        </div>
        <div className={styles.card}>
          <h4>Il cinema da soli?</h4>
          <p>10 Film a scelta per 1 persona</p>
          {/* <p>1 Persona</p> */}
          <p className={styles.detailsInfo}>
            *la card scade dopo 12 mesi dall'acquisto
          </p>
        </div>
        <div className={styles.card}>
          <h4>Il cinema in coppia?</h4>
          <p>10 Film a scelta per 2 persone</p>
          {/* <p>2 Persone</p> */}
          <p className={styles.detailsInfo}>
            *la card scade dopo 12 mesi dall'acquisto
          </p>
        </div>
        <div className={styles.bottomRightCard}>
          <img src={RedCard} alt="Red Card" />
        </div>
      </div>
    </div>
  );
}
