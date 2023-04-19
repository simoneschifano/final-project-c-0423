import styles from "../styles/TopRated.module.scss";
import CardList from "../components/cardList";

const TopRated = () => {
  const isTR = true;

  return (
    <div className={styles.TopRated}>
      <CardList isTR={isTR} />;
    </div>
  );
};

export default TopRated;
