import "../styles/movieDetail.module.css";
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
  const [cast, setCast] = useState(null);

  useEffect(() => {
    GET(`movie/${id}/credits`).then((data) => setCast(() => data.cast));
  }, []);

  // console.log(cast);
  return (
    <div className="movieDet">
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie[0].poster_path}`}
        alt="Poster Film"
      />
      <section className="details">
        <div className="title-rating">
          <h3>{selectedMovie[0].title}</h3>
          <div className="starWrap">
            <span>Rating is {selectedMovie[0].vote_average / 2}</span>
            <div
              className="Stars"
              aria-label={`Rating is ${
                selectedMovie[0].vote_average / 2
              } out of 5`}
              // style={`{--rating:${selectedMovie[0].vote_average / 2}}`}
            ></div>
          </div>
        </div>
        <div className="tags">
          <p>
            {selectedMovie[0].adult ? "Per adulti" : "Per tutta la famiglia"}
          </p>
          <p>120 min.</p>
        </div>
        <div className="description">{selectedMovie[0].overview}</div>
        <div className="cast">
          {cast?.slice(0, 5).map((photo) => (
            <img src={`https://image.tmdb.org/t/p/w500${photo.profile_path}`} />
          ))}
        </div>
        <button>
          <Link to={`/ticket/${id}/booking`}>Aquista il tuo biglietto</Link>
        </button>
      </section>
    </div>
  );
};

export default MovieDetails;
