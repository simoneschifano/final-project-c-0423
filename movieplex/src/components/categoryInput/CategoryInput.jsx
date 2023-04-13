import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const CategoryInput = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=3952ada8611fe5cc504d6b498fdac98d"
    ).then((data) => setCategories(data.genres));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Categoria</h3>

      <select className={styles.select} name="categories">
        <option value="">Seleziona la categoria</option>

        {categories.map((genre) => (
          <option className={styles.option} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryInput;
