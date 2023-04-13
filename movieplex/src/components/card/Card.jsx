import styles from "./index.module.scss";

const Card = ({ data }) => {
  return (
    <img
      className={styles.Card}
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt="{movie.title}"
    />
  );
};

export default Card;
