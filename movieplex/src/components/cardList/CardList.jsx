import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store/state";
import Card from "../card";

const CardList = ({ categoryId }) => {
  const { state, dispatch } = useContext(Context);

  // console.log(state.movieListData);
  // const filteredMovie = state.movieListData?.filter((movie) =>
  //   console.log(movie.genre_ids.includes(categoryId))
  // );

  return (
    <div className={styles.CardList}>
      <h3 className={styles.title}>Tutti i film in sala</h3>
      {/* AGGIUNGERE DIV */}
      {/* {state.movieListData.map((movie) => {
        movie.genre_ids.map((item) => item == categoryId);

        <Card data={movie} key={movie.id} />;
      })} */}
      {
        // categoryId
        // 	? filteredMovie.map((item) =>
        // <Card data={item} key={item.id} />;
        // 	console.log(item),
        // )
        // :  const filteredArrayByCat = movie.genre_ids.filter((item) => item == categoryId);

        state.movieListData.map((movie) => (
          <Card data={movie} key={movie.id} />
        ))
      }
    </div>
  );
};

export default CardList;
