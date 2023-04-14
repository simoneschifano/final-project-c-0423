import styles from "../styles/App.module.scss";
import CategoryInput from "../components/categoryInput/CategoryInput";
import { useEffect, useState } from "react";
import CardList from "../components/cardList";
import { useContext } from "react";
import { Context } from "../store/state.js";
function App() {
  const [categoryId, setCategoryId] = useState(0);
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.App}>
      <CategoryInput setCategoryId={setCategoryId} />
      <CardList categoryId={categoryId} />
    </div>
  );
}

export default App;
