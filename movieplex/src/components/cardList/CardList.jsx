import styles from "./index.module.scss";
import Card from "../card";

const CardList = () => {
  return (
    <div className={styles.CardList}>
      <h3 className={styles.title}>Tutti i film in sala</h3>
      <Card />
    </div>
  );
};

export default CardList;
