import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const CategoryInput = ({ setCategoryId }) => {
  const [categories, setCategories] = useState([]);
  const onHandleOptionValue = (e) => {
    setCategoryId(() => e.target.value);
  };

  useEffect(() => {
    GET("genre/movie/list").then((data) => setCategories(data.genres));
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

        {categories.map((genre) => (
          <option className={styles.option} value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryInput;
