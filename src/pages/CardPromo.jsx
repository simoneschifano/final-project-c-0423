import styles from "../styles/CardPromo.module.scss";
import GoldCard from "../assets/Cardoro.png";
import GoldCardFull from "../assets/CardoroFull.png";
import RedCard from "../assets/Cardrossa.png";
import RedCardFull from "../assets/CardrossaFull.png";
import BigCinema from "../assets/image.png";
export default function CardPromo() {
  return (
    <div className="">
      <div className={styles.CardPromo}>
        <div className={styles.CardsWrap}>
      <h3 className={styles.title}>Card e Promo</h3>
          <div className={styles.wrapper}>
            <img src={GoldCard} alt="Gold Card" />
            <div className={styles.textbox}>
              <h4 className={styles.firstext}>Il Cinema da soli?</h4>
              <p className={styles.secondtext}>10 Film a scelta per 1 persona</p>
            </div>
          </div>
          <div className={styles.wrapperDesk}>
            <img src={GoldCardFull} alt="Gold Card" />
            <div className={styles.textbox}>
              <h4 className={styles.firstext}>Il Cinema da soli?</h4>
              <p className={styles.secondtext}>10 Film a scelta per 1 persona</p>
            </div>
          </div>
          <div className={styles.secondwrapper}>
            <div className={styles.secondtextbox}>
              <h4 className={styles.firstext}>Il Cinema in coppia?</h4>
              <p className={styles.secondtext}>10 Film a scelta per 2 persone</p>
            </div>
            <img src={RedCard} alt="Red Card" />
          </div>
          <div className={styles.secondwrapperDesk}>
            <img src={RedCardFull} alt="Red Card" />
            <div className={styles.secondtextbox}>
              <h4 className={styles.firstext}>Il Cinema in coppia?</h4>
              <p className={styles.secondtext}>10 Film a scelta per 2 persone</p>
            </div>
          </div>
        </div>
        <img className={styles.backgroundImage} src={BigCinema} alt="image" />
      </div>
    </div>
  );
}
