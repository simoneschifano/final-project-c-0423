import styles from "./index.module.scss";

const Card = () => {
  return (
    <img
      className={styles.Card}
      src="https://image.tmdb.org/t/p/w500/A1H2lnpur1IofI0ufcImcAnSytP.jpg"
      alt="{movie.title}"
    />
  );
};

export default Card;
