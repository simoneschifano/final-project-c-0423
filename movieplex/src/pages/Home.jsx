import styles from "../styles/App.module.scss";
import CategoryInput from "../components/categoryInput/CategoryInput";
import CardList from "../components/cardList/CardList";
function App() {
  return (
    <div className={styles.App}>
      Home
      <CategoryInput />
      {/* PROVVISORIO */}
      <CardList />
    </div>
  );
}

export default App;
