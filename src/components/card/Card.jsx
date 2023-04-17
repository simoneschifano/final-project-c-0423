import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../store/state";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const { dispatch } = useContext(Context);

  const onHandleClick = () => {
    navigate(`/movie/${data.id}`);
    dispatch({ type: "SET_MODAL_CLOSE" });
  };

  return (
    <img
      className={styles.Card}
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt="{movie.title}"
      onClick={onHandleClick}
    />
  );
};

export default Card;
