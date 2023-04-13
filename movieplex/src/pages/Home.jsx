import styles from "../styles/App.module.scss";
import { initialState, Context } from "../store/state";
import { mainReducer } from "../store/reducer";
import CategoryInput from "../components/categoryInput/CategoryInput";
import CardList from "../components/cardList/CardList";
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { GET } from "../utils/http";
function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    GET(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=3952ada8611fe5cc504d6b498fdac98d&language=it-IT"
    ).then((data) => {
      const moviesData = data.results;
      dispatch({ type: "SET_MOVIE_LIST", payload: moviesData });
    });
  }, []);

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <CategoryInput setCategoryId={setCategoryId} />
        {/* PROVVISORIO */}
        <CardList categoryId={categoryId} />
      </Context.Provider>
    </div>
  );
}

export default App;
