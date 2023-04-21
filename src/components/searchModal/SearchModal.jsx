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

  const onHandleChangeName = (e) => setInputMovieName(() => e.target.value);
  const [inputControl, setInputControl] = useState(false);
  const onSubmitSearch = (e) => {
    e.preventDefault();
    setSubmitMovieName(inputMovieName.toLowerCase());

    if (
      submitMovieName == "" ||
      submitMovieName.length == 0 ||
      filterMovies.length == 0
    ) {
      setInputControl(!inputControl);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form action="">
        <h3 className={styles.title}>Cerca un film</h3>
        <input
          className={styles.searchInput}
          type="text"
          name="movieInput"
          onChange={onHandleChangeName}
        />
        <input
          onClick={onSubmitSearch}
          className={styles.searchBtn}
          type="submit"
          value={"Cerca"}
        />
      </form>
      <div className={styles.cardWrapper}>
        {submitMovieName !== "" &&
          submitMovieName !== " " &&
          filterMovies.length !== 0 &&
          filterMovies.map((movie) => (
            <CardSearch data={movie} key={movie.id} />
          ))}
        {inputControl && <p>La ricerca non ha prodotto alcun risultato</p>}
      </div>
    </div>
  );
};

export default SearchModal;
