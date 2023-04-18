import styles from "../styles/movieDetail.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/state.js";
import { Link, useParams } from "react-router-dom";
import { GET } from "../utils/http";

const MovieDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(Context);

  const selectedMovie = state.movieListData.filter(
    (movie) => movie.id == parseInt(id)
  );
  const filteredGenre = selectedMovie.map((genre) => genre.genre_ids);
  const genreId = state.genreList.filter((item) =>
    filteredGenre[0].includes(item.id)
  );

  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const rating = null;
  useEffect(() => {
    GET(`movie/${id}/videos`).then((data) => setTrailer(() => data.results[0]));
  }, []);

  useEffect(() => {
    GET(`movie/${id}/credits`).then((data) => setCast(() => data.cast));
  }, []);

  return (
    <div className={styles.movieDet}>
      <iframe
        className={styles.trailer}
        width="350"
        height="235"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
      ></iframe>
      <section className={styles.details}>
        <div className={styles.title_rating}>
          <h3>{selectedMovie[0]?.title}</h3>
          <div className={styles.starWrap}>
            <div
              className={styles.Stars}
              aria-label={`Rating is ${
                selectedMovie[0]?.vote_average / 2
              } out of 5`}
              style={{ "--rating": selectedMovie[0]?.vote_average / 2 }}
            ></div>
            {/* <span>{selectedMovie[0]?.vote_average / 2}</span> */}
          </div>
        </div>
        <div className={styles.tags}>
          <p>
            {selectedMovie[0]?.adult ? "Per adulti" : "Per tutta la famiglia"}
          </p>
          <p>120 min</p>
        </div>
        <div className={styles.genres}>
          {genreId.map((genre) => (
            <p>{genre.name}</p>
          ))}
          {console.log(genreId)}
        </div>
        <p className={styles.description}>{selectedMovie[0]?.overview}</p>

        <p className={styles.text}> Cast: </p>
        <div className={styles.castWrapper}>
          {cast?.slice(0, 8).map((cast) => (
            <div className={styles.actorImg} key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`}
                alt={cast.name}
              />
            </div>
          ))}
        </div>

        <button className={styles.bookBtn}>
          <Link to={`/ticket/${id}/booking`}>Aquista il tuo biglietto</Link>
        </button>
      </section>
    </div>
  );
};

export default MovieDetails;
