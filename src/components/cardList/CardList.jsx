import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store/state";
import Card from "../card";

const CardList = ({ categoryId, isTR }) => {
  const { state, dispatch } = useContext(Context);
  const filteredMovie = state.movieListData?.filter((movie) =>
    movie.genre_ids.includes(parseInt(categoryId))
  );

  return (
    <div>
      {isTR ? (
        <div className={styles.CardList}>
          <h3 className={styles.title}>I film più amati</h3>
          {state.trListData?.map((movie) => (
            <Card data={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className={styles.CardList}>
          <h3 className={styles.title}>Tutti i film in sala</h3>
          {filteredMovie.length > 0
            ? filteredMovie.map((movie) => <Card data={movie} key={movie.id} />)
            : state.movieListData?.map((movie) => (
                <Card data={movie} key={movie.id} />
              ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
