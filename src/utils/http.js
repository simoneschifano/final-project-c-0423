const BASE_URL = "https://api.themoviedb.org/3/";
// const movie_upcoming = "movie/upcoming";
// const category = "genre/movie/list";
const api_key = "?api_key=3952ada8611fe5cc504d6b498fdac98d";
const lang = "&language=it-IT";
export const GET = async (endpoint, lang = "&language=it-IT") => {
  const res = await fetch(BASE_URL + endpoint + api_key + lang);
  const data = await res.json();
  return data;
};
