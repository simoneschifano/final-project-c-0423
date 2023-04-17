import styles from "./index.module.scss";
import { useState, useContext } from "react";
import { Context } from "../../store/state";
import Card from "../card";

const SearchModal = () => {
  const [inputMovieName, setInputMovieName] = useState("");
  const [submitMovieName, setSubmitMovieName] = useState("");
  const { state } = useContext(Context);
  const filterMovies = state.movieListData.filter((movie) =>
    movie.title.toLowerCase().includes(submitMovieName)
  );

  const onHandleChangeName = (e) => setInputMovieName(() => e.target.value);
  const onSubmitSearch = (e) => {
    e.preventDefault();
    setSubmitMovieName(inputMovieName.toLowerCase());
  };
  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={onSubmitSearch}>
        <h3 className={styles.title}>Cerca un film</h3>
        {/* <label htmlFor="movieInput">Cerca un film</label> */}
        <input
          className={styles.searchInput}
          type="text"
          name="movieInput"
          onChange={onHandleChangeName}
        />
        <input className={styles.searchBtn} type="submit" value={"Cerca"} />
      </form>
      <div className={styles.cardWrapper}>
        {submitMovieName !== "" &&
          filterMovies.length !== 0 &&
          filterMovies.map((movie) => <Card data={movie} key={movie.id} />)}
      </div>{" "}
    </div>
  );
};

export default SearchModal;
