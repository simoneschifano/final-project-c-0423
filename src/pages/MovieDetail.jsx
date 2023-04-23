import styles from "../styles/movieDetail.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/state.js";
import { useParams, useNavigate } from "react-router-dom";
import { GET } from "../utils/http";
import Avatar from '../assets/avatar.png'

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const genreList = JSON.parse(localStorage.getItem('genreList'));
  const rating = null;

  const selectedMovie = state.movieListData?.filter(
    (movie) => movie.id == parseInt(id)
  );

  const filteredTopRate = state.trListData?.filter(
    (movie) => movie.id == parseInt(id)
  );
  const movieDataArray = () => {
    let arrayItem = []
    if (selectedMovie) arrayItem.push(...selectedMovie)
    if (filteredTopRate) arrayItem.push(...filteredTopRate)
    return arrayItem
  }

  const filteredGenre = selectedMovie?.map((genre) => genre.genre_ids);
  const filteredGenreTopRated = filteredTopRate?.map((genre) => genre.genre_ids);
  const genreArray = () => {
    let arrayItem = []
    if (filteredGenre) arrayItem.push(...filteredGenre)
    if (filteredGenreTopRated) arrayItem.push(...filteredGenreTopRated)
    return arrayItem.flat()
  }
  const genreId = (genreList || state.genreList)?.filter((item) =>
    genreArray().includes(item.id)
  );

  useEffect(() => {
    GET(`movie/${id}/videos`, "").then((data) => {
      const filteredTrailer = data.results?.filter(
        (video) => video.type == "Trailer"
      );
      setTrailer(() => filteredTrailer[0]);
    });
  }, []);

  useEffect(() => {
    GET(`movie/${id}/credits`).then((data) => setCast(() => data.cast));
  }, []);

  const onHandleIfRedirect = () => {
    localStorage.getItem("auth")
      ? navigate(`/ticket/${id}/booking`)
      : navigate("/login");
  };
  return (
    <div className={styles.movieDet}>
      <iframe
        className={styles.trailerMobile}
        width="350"
        height="235"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>

      <iframe
        className={styles.trailerDesktop}
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>
      <section className={styles.details}>
        <div className={styles.details_title_rating}>
          <div className={styles.title_rating}>
            <h3 className={styles.title}>{movieDataArray()[0]?.title}</h3>
            <div className={styles.infoWrapper}>
              <div className={styles.leftInfo}>
                <h3
                  className={` ${!movieDataArray()[0]?.overview
                    ? styles.largerTitle
                    : styles.title
                    }`}
                >
                  {movieDataArray()[0]?.title}
                </h3>
                <div
                  className={styles.Stars}
                  aria-label={`Rating is ${movieDataArray()[0]?.vote_average / 2
                    } out of 5`}
                  style={{ "--rating": movieDataArray()[0]?.vote_average / 2 }}
                ></div>
              </div>
              <div className={styles.genresDesktop}>
                {genreId.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </div>
            <div className={styles.starWrap}>
              <div
                className={styles.Stars}
                aria-label={`Rating is ${movieDataArray()[0]?.vote_average / 2
                  } out of 5`}
                style={{ "--rating": movieDataArray()[0]?.vote_average / 2 }}
              ></div>
              {/* <span>{selectedMovie[0]?.vote_average / 2}</span> */}
            </div>
          </div>
          <div className={styles.tags}>
            <p>
              {movieDataArray()[0]?.adult ? "Per adulti" : "Per tutta la famiglia"}
            </p>
            <p>120 min</p>
          </div>
          <div className={styles.genres}>
            {genreId?.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          {movieDataArray()[0]?.overview ? (
            <p className={styles.description}>{movieDataArray()[0]?.overview}</p>
          ) : (
            <p className={styles.description}>Descrizione non disponibile</p>
          )}

          <p className={styles.text}> Cast: </p>
          <div className={styles.castWrapper}>
            {cast?.slice(0, 8).map((cast) => (
              <div className={styles.actorImg} key={cast.id}>
                <img
                  src={cast?.profile_path ? `https://image.tmdb.org/t/p/w500${cast?.profile_path}` : Avatar}
                  alt={cast.name}
                />
              </div>
            ))}
          </div>


          <button onClick={onHandleIfRedirect} className={styles.bookBtn}>Acquista il tuo biglietto</button>
        </div>
        <div className={styles.castWrapperDesktop}>
          <p className={styles.textCast}> Cast: </p>
          <div className={styles.castWrapperActors}>
            {cast?.slice(0, 8).map((cast) => (
              <div className={styles.actorImg} key={cast.id}>
                <img
                  src={cast?.profile_path ? `https://image.tmdb.org/t/p/w500${cast?.profile_path}` : Avatar}
                  alt={cast.name}
                />
                <p className={styles.actorName}>{cast.original_name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
