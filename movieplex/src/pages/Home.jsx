import styles from "../styles/App.module.scss";
import { initialState, Context } from "../store/state";
import { mainReducer } from "../store/reducer";
import CategoryInput from "../components/categoryInput/CategoryInput";
import CardList from "../components/cardList/CardList";
import { useEffect, useState } from "react";
import { useReducer } from "react";

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [state, dispatch] = useReducer(mainReducer, initialState);
  console.log(state);

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <CategoryInput setCategoryId={setCategoryId} />

        <CardList categoryId={categoryId} />
      </Context.Provider>
    </div>
  );
}

export default App;
