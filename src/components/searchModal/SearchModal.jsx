import styles from "./index.module.scss";
import { useState, useContext } from "react";
import { Context } from "../../store/state";
import CardSearch from "../cardSearch";

const SearchModal = () => {
  const [inputMovieName, setInputMovieName] = useState("");
  const [submitMovieName, setSubmitMovieName] = useState("");
  const { state } = useContext(Context);
  const filterMovies = state.movieListData.filter((movie) =>
    movie.title.toLowerCase().includes(submitMovieName)
  );

  const onHandleChangeName = (e) => setInputMovieName(() => (e.target.value.toLowerCase().trim()));
  const [inputControl, setInputControl] = useState(false);
  const onSubmitSearch = (e) => {
    e.preventDefault();
    setInputControl(true);
    setSubmitMovieName(inputMovieName.toLowerCase());
  };
  return (
    <div className={styles.wrapper}>
      <form action="">
        <h3 className={styles.title}>Cerca i film in sala</h3>
        <input
          className={styles.searchInput}
          type="text"
          name="movieInput"
          placeholder="Cerca un film"
          onChange={onHandleChangeName}
        />
        <button
          onClick={onSubmitSearch}
          className={styles.searchBtn}
          type="submit"
        >Cerca</button>
      </form>
      <div className={styles.cardWrapper}>
        {submitMovieName !== "" &&
          filterMovies.length !== 0 &&
          filterMovies.map((movie) => (
            <CardSearch data={movie} key={movie.id} />
          ))}
        {(inputControl && (filterMovies.length === 0 || submitMovieName == "")) && <p>Questo film non è attualmente in programmazione in sala</p>}
      </div>
    </div>
  );
};

export default SearchModal;
