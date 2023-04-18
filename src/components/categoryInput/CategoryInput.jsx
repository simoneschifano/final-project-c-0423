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

  useEffect(() => {
    GET("genre/movie/list").then((data) => {
      const genreData = data.genres;
      dispatch({ type: "SET_GENRE_LIST", payload: genreData });
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Categoria</h3>

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
        {state.genreList.map((genre) => (
          <option className={styles.option} value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryInput;
