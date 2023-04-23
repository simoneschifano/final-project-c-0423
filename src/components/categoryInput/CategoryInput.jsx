import styles from "./index.module.scss";
import { useContext, useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { Context } from "../../store/state";

const CategoryInput = ({ setCategoryId }) => {
  const [categories, setCategories] = useState([]);
  const onHandleOptionValue = (e) => {
    setCategoryId(() => e.target.value);
  };
  const { state, dispatch } = useContext(Context);
  const genreList = JSON.parse(localStorage.getItem('genreList'));
  useEffect(() => {
    if (!genreList)
      GET("genre/movie/list").then((data) => {
        const genreData = data.genres;
        dispatch({ type: "SET_GENRE_LIST", payload: genreData });
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Cerca per categoria</h3>

      <select
        className={styles.select}
        name="categories"
        onChange={onHandleOptionValue}
      >
        <option value="">Seleziona la categoria</option>

        {/* {categories.map((genre) => (
          <option className={styles.option} value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))} */}
        {(genreList || state.genreList).map((genre) => (
          <option className={styles.option} value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <div className={styles.quote}>
        <blockquote>
          "Il Cinema è straordinario, è magico...L'ho sempre amato, fin da
          piccolo. Mi piaceva entrare in un cinema e provare quell'emozione e
          non volevo mai andarmene..."
        </blockquote>
        <h3>Ben Kingslay</h3>
      </div>
    </div>
  );
};

export default CategoryInput;
