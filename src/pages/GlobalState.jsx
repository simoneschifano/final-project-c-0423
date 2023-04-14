import { useReducer, useEffect } from "react";
import { initialState, Context } from "../store/state";
import { GET } from "../utils/http";
import { mainReducer } from "../store/reducer";

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  useEffect(() => {
    GET("movie/upcoming").then((data) => {
      const moviesData = data.results;
      dispatch({ type: "SET_MOVIE_LIST", payload: moviesData });
    });
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default GlobalState;
